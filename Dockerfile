FROM node:14.17-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .

EXPOSE 3000
CMD "npm" "start"
