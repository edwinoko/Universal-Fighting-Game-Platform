FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies and Next.js globally (for CLI usage)
RUN npm install && npm install -g next

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# For development: mount your code with -v $(pwd):/app and use hot reload
# Example: docker run -p 3000:3000 -v $(pwd):/app nextjs-app

# Start Next.js in production mode
CMD ["npm", "run", "dev"]