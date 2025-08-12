FROM node:18 AS builder

WORKDIR /app

# Copiar solo package.json y package-lock.json para npm ci cacheable
COPY package.json package-lock.json ./
RUN npm ci

# Copiar resto de código
COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

