FROM node:latest
RUN mkdir -p /src/app/
WORKDIR /src/app/
COPY package.json /src/app/
COPY .sequelizerc /src/app/
COPY db /src/app/
COPY server /src/app/
COPY public /src/app/

RUN export NODE_ENV=production
RUN npm install --production
