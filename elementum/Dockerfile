# ── Stage 1: Build React app ─────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json first — Docker caches this layer separately
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build production bundle
RUN npm run build

# ── Stage 2: Serve with nginx ─────────────────────────────
FROM nginx:alpine

# Copy built files into nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
