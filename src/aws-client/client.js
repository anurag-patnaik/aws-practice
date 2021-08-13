import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const REGION = 'us-west-2';
const ENDPOINT = 'http://localhost:8000';

const ddbClient = new DynamoDBClient({
    region: REGION,
    endpoint: ENDPOINT
});

export { ddbClient };