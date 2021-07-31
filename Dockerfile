FROM node:14.17-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY .npmrc ./
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .

EXPOSE 3000
CMD "npm" "start"
