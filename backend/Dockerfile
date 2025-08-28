# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend code
COPY . .

# Expose the port used in .env
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
