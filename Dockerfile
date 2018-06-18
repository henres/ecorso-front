FROM kkarczmarczyk/node-yarn:8.0 AS build

COPY . /app

WORKDIR /app

RUN yarn \
    && yarn run build

FROM node:10 AS RUN

copy --from=build /app /app

ENTRYPOINT ["yarn", "run", "build"]