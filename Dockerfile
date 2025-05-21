# 1. Base image
FROM node:12-alpine AS builder

# 2. Set working directories
WORKDIR /app

# # 3. Build frontend
# COPY client ./client
# WORKDIR /app/client
# RUN npm install
# RUN npm run build

# 4. Build backend
WORKDIR /app
COPY API ./API
WORKDIR /app/API
# COPY --from=builder /app/client/dist ./public  # Move built frontend to API
RUN npm install

# 5. Run API (serves frontend too)
CMD ["npm", "start"]