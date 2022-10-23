FROM node:16.5.0-alpine

WORKDIR /product-service

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]