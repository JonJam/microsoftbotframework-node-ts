# Production build requires "yarn build" to have been run.
# TODO Use tini: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
FROM node:carbon

ARG nodeEnv=production

# Best practise: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#environment-variables
ENV NODE_ENV=$nodeEnv

WORKDIR /app

COPY package.json yarn.lock ./

# This will skip dev dependencies if NODE_ENV=production.
RUN yarn install

COPY /dist ./dist

EXPOSE 8080

# Best practise: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

# Best practise: https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#environment-variables
CMD [ "node", "dist/server.js" ]