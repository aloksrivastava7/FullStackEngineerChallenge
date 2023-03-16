# Dockerfile for React client

# Build react client
FROM node

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm install 

#Ports
EXPOSE 3000:3000


# Runs "npm start" after the above step is completed
# CMD ["npm", "start"]