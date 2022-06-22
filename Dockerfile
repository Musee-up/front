FROM node:16-alpine

WORKDIR /home/front

COPY package*.json ./

RUN apk update && apk upgrade
RUN yarn install

RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/
RUN yarn add --platform=linuxmusl --arch=x64 sharp

COPY . .
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["yarn", "dev"]
