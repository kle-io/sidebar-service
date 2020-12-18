FROM node:latest

# Create app dir
WORKDIR usr/src/app/

# Install dependencies
COPY package*.json ./

# Build code for production
RUN npm ci --only-production

# Bundle app source
COPY . .

# Setup ORM and seed DB
RUN npm db:setup

# Create static files
RUN npm build

EXPOSE 3004
CMD ["node", "server/server.js"]
