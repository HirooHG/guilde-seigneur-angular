FROM docker.io/node:18.17.1-alpine3.18 as build-stage

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build --omit=dev

FROM nginx:1.25.2-alpine3.18

COPY --from=build-stage /app/dist/qimtime-web /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
