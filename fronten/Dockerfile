# --- Stage 1: Build the React app ---
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build the production-ready static files
RUN npm run build

# --- Stage 2: Serve the build with Nginx ---
FROM nginx:alpine
# Copy the compiled build folder to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the React app
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
