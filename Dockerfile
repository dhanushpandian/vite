# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to start your app (adjust as per your Vite configuration)
CMD ["npm", "run", "dev"]
