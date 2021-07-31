FROM node:14.17.0

COPY ./ ./

RUN npm install
RUN npm run build

ENV NODE_ENV production
# ENV DATABASE_CONFIGURATION_PROFILE postgres
# ENV FRAMEWORK express

CMD ["node", "dist/main", "server:start"]