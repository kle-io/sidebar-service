# syntax = docker/dockerfile:1.0-experimental
FROM node:latest

# Create app dir
WORKDIR usr/src/app/

# Install dependencies
COPY package*.json ./
RUN npm install

# Define build args
ARG db_host
ARG db_pass
ARG db_name

# Set env vars
ENV DB_HOST=$db_host
ENV DB_NAME=$db_name
ENV DB_USER=$db_name
ENV DB_PASS=$db_pass

COPY . .

# THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# Create static files
RUN npm run build

EXPOSE 3004
CMD /wait && npm run db:setup && npm start
