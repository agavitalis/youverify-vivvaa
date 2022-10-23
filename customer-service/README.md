# # YouVerify Customer-Service API

This project is a customer service API used for illustration purposes.

## Prerequisites
- Node.js 
- Yarn or NPM
- MongoDB
- RabbitMQ


## Installation
- Install dependencies with yarm
```bash
yarn install 
```
- Install dependencies with npm
```bash
npm install 
```
## Running the app

- Create local environment file and update the env variables
```shell
cp .env.example .env
nano .env
```
- Start Application in development mode 
```bash
npm run dev
```
The application will be live on http://localhost:5001 and you can view the docs here - [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e?action=collection%2Ffork&collection-url=entityId%3D2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e%26entityType%3Dcollection%26workspaceId%3Dd0d30f99-ced4-46e0-a9a5-a6ef9b0591ea)

- Start Application in production mode
```bash
npm run build
```

```bash
npm run start
```

The application will be live on http://localhost:5001 and you can view the docs here - [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e?action=collection%2Ffork&collection-url=entityId%3D2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e%26entityType%3Dcollection%26workspaceId%3Dd0d30f99-ced4-46e0-a9a5-a6ef9b0591ea)

## Running the app with docker

You can also run this application using docker by building the image and mapping the necessary ports. This process requires that you have docker pre-installed in your system.
 
To proceed,navigate to the root directory of the application and build the application image using the following command:

```bash
docker build . -t <your username>/customer-service
```
Run your image in detached mode with -d tag. The -p flag map a public port to a private port inside the container. Run the image you previously built using the command:

```bash
docker run -p 5001:5001 -d <your username>/customer-service
```

The application will be live on http://localhost:5001 and you can view the docs - [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e?action=collection%2Ffork&collection-url=entityId%3D2979665-b9e3cfe1-88ec-4017-8aae-ca4d9406c58e%26entityType%3Dcollection%26workspaceId%3Dd0d30f99-ced4-46e0-a9a5-a6ef9b0591ea)

## Stay in touch

- Author - [Ogbonna Vitalis](agavitalisogbonna@gmail.com)

## License

Licence is [MIT licensed](LICENSE).
