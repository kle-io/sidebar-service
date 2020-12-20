FROM node:latest

# Create app dir
WORKDIR usr/src/app/

# Install dependencies
COPY package*.json ./

# Build code for production
RUN npm ci --only-production

# Build code for development
# RUN npm install

# Bundle app source
COPY . .

# THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# Create static files
RUN npm run build

EXPOSE 3004
CMD /wait && npm run db:setup && npm start
