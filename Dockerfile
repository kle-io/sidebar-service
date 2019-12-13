FROM node:latest
RUN mkdir -p /src/app/
WORKDIR /src/app/
COPY package.json /src/app/
COPY .sequelizerc /src/app/
COPY db /src/app/

RUN npm install

COPY . /src/app/
RUN npm run build

CMD ["npm", "start"]