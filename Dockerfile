FROM node:21-alpine3.18

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8016

ARG SCOUT_WEB_LOCAL_URL
ENV API_URL ${SCOUT_WEB_LOCAL_URL}
ENV HOST=0.0.0.0
ENV PORT=8016

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

RUN apk add --no-cache bash
RUN apk add --no-cache make
RUN apk add --no-cache curl
RUN apk add --no-cache openjdk11

ENV BASH_ENV="/etc/profile"
ENTRYPOINT [ "/bin/bash", "-c", "yarn install && /bin/bash", "" ]
