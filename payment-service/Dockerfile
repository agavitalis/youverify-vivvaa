FROM node:16.5.0-alpine

WORKDIR /transaction-service

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 5004

CMD ["npm", "start"]