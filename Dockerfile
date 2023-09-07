# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite-based React app for production
RUN npm run build

# Expose the application's port (change this if needed)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
