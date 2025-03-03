# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 AS build
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./.npmrc .npmrc
RUN rm -rf node_modules && npm install
COPY ./ ./
RUN npm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]