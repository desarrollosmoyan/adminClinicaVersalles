
FROM node:18-alpine

WORKDIR /next-app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE $PORT

CMD ["yarn", "start"]