import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../aws-client/client";

export class DbService {
    getCountryTableParams(id) {
        return {
            KeyConditionExpression: 'id = :s',
            ExpressionAttributeValues: {
                ':s': id
            },
            TableName: 'Country'
        };
    }

    async getCountry(id) {
        const params = this.getCountryTableParams();

        let greeting = '';
        try {
            const data = await ddbClient.send(new QueryCommand(params));

            if (data.Items.length === 0) {
                greeting = `N/A. No country found with id: ${id}`;
            } else if (data.Items.length > 1) {
                console.log(`[DbService]: Unexpected error - more than once country returned.
                 Number: ${data.Items.length}`);
            } else {
                const item = data.Items[0];
                console.log(`[DbService]: Country - ${JSON.stringify(item)}`);

                greeting = item.greeting;
            }
        } catch (err) {
            console.log(`[DbService]: Getting Country data failed with err: ${err}`);
            greeting = "An error occurred. No greeting available.";
        }

        return greeting;
    }
}