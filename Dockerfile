FROM node:24-trixie AS builder

COPY . .

ENV BACKEND_URL=https://deepshore.de

RUN npm ci && npm run generate

FROM nginx:alpine

LABEL org.opencontainers.image.source="https://github.com/deepshore/deepops-website"

# Copy the build output to replace the default nginx contents.
COPY --from=builder .output/public /usr/share/nginx/html

COPY /webserver/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
