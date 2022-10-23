FROM node:16.5.0-alpine

WORKDIR /order-service

COPY package*.json ./

RUN npm install --only=orderion

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]