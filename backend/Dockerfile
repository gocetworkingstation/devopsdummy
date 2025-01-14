# --- Stage 1: Build (if you're using TypeScript) ---
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Build (e.g., TypeScript compile)
# If you have "build": "tsc" in package.json scripts:
RUN npm run build

# --- Stage 2: Run ---
FROM node:18-alpine
WORKDIR /app

# Copy the built files from previous stage
COPY --from=build /app/dist ./dist
# If you need any static assets or other files, copy them too

# Install only prod dependencies if you prefer
COPY --from=build /app/package*.json ./
RUN npm install --production

# Expose the backend port
EXPOSE 3001

# Use the environment variable PORT if needed, or fallback
ENV PORT=3001

# Start the server
CMD ["node", "dist/index.js"]
