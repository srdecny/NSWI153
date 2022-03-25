FROM node:17 as install
WORKDIR /client
COPY package*.json .
RUN npm ci

COPY . .

FROM install AS dev
WORKDIR /client
CMD npx svelte-kit dev --host --port 3030