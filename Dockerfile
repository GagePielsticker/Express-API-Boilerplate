FROM node:12-slim

USER node

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json .
RUN npm install --only=prod
COPY . .

HEALTHCHECK --interval=1m --timeout=3s --start-period=15s \
  CMD curl -fs http://localhost:3000/healthcheck || exit 1

EXPOSE 8443

CMD ["npm","start"]