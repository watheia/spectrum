FROM node:14-alpine as build

WORKDIR /workspace
ADD . .

RUN yarn && \
  yarn nx run www:build --parallel --prod
