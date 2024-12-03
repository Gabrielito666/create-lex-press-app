FROM node:22-alpine AS builder

WORKDIR /app

COPY ./ /app/

RUN npm i
RUN npm run build

FROM node:22-alpine AS main

WORKDIR /app

COPY ./package*.json /app/
COPY ./public /app/
COPY --from=builder /app/.lex-press /app/.lex-press

CMD ["npm", "run", "start"]