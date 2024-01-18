FROM node:14

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

EXPOSE 8080

ARG _API_URL _GA_MEASUREMENT_ID
ENV GA_MEASUREMENT_ID ${_GA_MEASUREMENT_ID}
ENV API_URL ${_API_URL}
ENV HOST=0.0.0.0
ENV PORT=8080

COPY . ./
RUN yarn build

CMD [ "yarn", "start" ]
