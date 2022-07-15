FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Update npm
RUN npm install -g npm@8.14.0

RUN npm i http 
RUN npm i express 
RUN npm i mongoose 
RUN npm i bcryptjs 
RUN npm i jsonwebtoken
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
