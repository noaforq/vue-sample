FROM node:21-alpine3.18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8080

ENV API_URL=https://exsample.com
ENV HOST=0.0.0.0
ENV PORT=8080

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./yarn.lock ./

RUN yarn install

RUN apk add --no-cache bash
RUN apk add --no-cache make
RUN apk add --no-cache curl
RUN apk add --no-cache openjdk11

COPY . ./
RUN yarn build

CMD [ "yarn", "start" ]
