FROM node:lts-alpine as builder

COPY . .

ENV BACKEND_URL https://deepshore.de

RUN yarn && yarn generate

FROM nginx:1.25

LABEL org.opencontainers.image.source = "https://github.com/deepshore/deepops-website"

# Copy the build output to replace the default nginx contents.
COPY --from=builder dist /usr/share/nginx/html

COPY /webserver/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
