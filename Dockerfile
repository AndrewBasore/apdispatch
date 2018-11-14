FROM node:latest

WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . /app

EXPOSE 3000