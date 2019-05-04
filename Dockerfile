#Estagio 1 - Será responsavel em construir nossa aplicação
#FROM node:9.11.2-slim as node
#WORKDIR /front-propostacredito
#COPY package.json /front-propostacredito/
#RUN npm i npm@latest -g
#RUN npm install
#COPY ./ /front-propostacredito/
#ARG env=prod
#RUN npm run build

#Estagio 2 - Será responsavel por expor a aplicação
#FROM nginx:1.13
#COPY --from=node /front-propostacredito/dist/front-propostacredito /usr/share/nginx/html
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf



FROM node:11.6.0-alpine AS builder
COPY . ./front-propostacredito
WORKDIR /front-propostacredito
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /front-propostacredito/dist/front-propostacredito/ /usr/share/nginx/html

