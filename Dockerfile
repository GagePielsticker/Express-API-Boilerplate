FROM node:12-slim

USER node

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json .
RUN npm install --only=prod
COPY . .

EXPOSE 8443

CMD ["npm","start"]