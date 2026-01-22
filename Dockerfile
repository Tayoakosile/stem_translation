# Stage 1: Build the application
FROM node:20.0.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --verbose
COPY . .

# Set build-time environment variables
ARG NEXT_PUBLIC_ENV
ENV NEXT_PUBLIC_ENV=${NEXT_PUBLIC_ENV}

RUN npm run build

# Stage 2: Run the application
FROM node:20.0.0-slim
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose the port that Cloud Run expects the container to listen on
EXPOSE 8080
ENV PORT=8080

# Set runtime environment variable
ENV NEXT_PUBLIC_ENV=${NEXT_PUBLIC_ENV}

# Start the application
CMD ["npm", "start"]