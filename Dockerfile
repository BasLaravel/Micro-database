FROM node:10-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY server.js ./
RUN npm install
# RUN npm install -g nodemon