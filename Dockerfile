FROM node:16.14-alpine AS builder

WORKDIR /usr/share/nginx/html22

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "prod"]

EXPOSE 8080
