FROM node:16.5.0-alpine

WORKDIR /customer-service

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]