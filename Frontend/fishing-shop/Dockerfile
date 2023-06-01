FROM node:current-alpine

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "start"];