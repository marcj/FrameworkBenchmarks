FROM node:16.8.0-alpine

RUN apk --no-cache add g++ gcc git libgcc libstdc++ linux-headers make python3 libexecinfo-dev postgresql-dev

RUN npm i -g npm@6

# first package manager stuff so installing is cached by Docker.
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm ci

COPY ./ ./

RUN npm run build

ENV NODE_ENV production
ENV DATABASE_CONFIGURATION_PROFILE mongodb

CMD ["node", "dist/main", "server:start"]
