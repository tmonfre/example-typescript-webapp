FROM node:12-alpine as base
WORKDIR /app
COPY package*.json ./
ENV PORT=8080

FROM base AS dev
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

FROM dev AS test
COPY . .
CMD ["npm", "run", "test"]

# EXPOSE 8080
FROM base AS builder
RUN npm ci
COPY src src
COPY webpack* .
COPY .eslintrc.json .
COPY .babelrc .
COPY tsconfig.json .
RUN npm run build

FROM base AS prod
# this still installs all the non-dev dependencies; removing react etc would be better
RUN npm ci --production
COPY --from=builder /app/build ./build
COPY app.js app.js
CMD ["node", "app.js"]

FROM nginx:mainline-alpine AS nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
