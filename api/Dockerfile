#  Dockerfile for Node Express Backend

FROM node

# Create App Directory

WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code


# Exports
EXPOSE 8000:8000

# Runs "npm start" after the above step is completed
# CMD ["npm", "start"]

