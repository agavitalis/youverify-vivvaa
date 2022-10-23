FROM node:16.5.0-alpine

WORKDIR /transaction-service

COPY package*.json ./

RUN npm install --only=transactionion

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]