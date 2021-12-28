#build environment
FROM node:alpine as build
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR '/app'
COPY package.json .
RUN npm ci --silent
RUN npm install --silent
COPY . .
RUN npm run build

#production environment
FROM nginx
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
