FROM alpine AS base
RUN apk add \
  nginx \
  npm
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /run/nginx

# Install npm dependencies separately to use Docker cache more efficiently
FROM base AS packages
WORKDIR /tmp/build/
COPY package.json .
RUN npm install

FROM packages AS build
COPY public/ ./public/
COPY src/ ./src/
COPY .eslintrc.js .
COPY babel.config.js .
COPY postcss.config.js .
RUN npm run build

FROM build AS app
WORKDIR /app/
COPY --from=build /tmp/build/dist /app
CMD ["nginx", "-g", "daemon off;"]
