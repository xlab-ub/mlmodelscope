FROM node:8-alpine as build

WORKDIR /app

COPY package* ./
RUN npm install

ARG SITE_TITLE
ENV SITE_TITLE=${SITE_TITLE}

ARG API_URL
ENV API_URL=${API_URL}

ARG TRACE_URL
ENV TRACE_URL=${TRACE_URL}

# add app after dependencies have been installed to stop cache busting
COPY ./public ./public
COPY ./src ./src
COPY ./* ./

RUN npm run build

# production web server
FROM nginx:stable
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/sync-to-s3.sh sync-to-s3.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
