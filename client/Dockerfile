FROM node:17 as install
WORKDIR /client
COPY package*.json .

# The prepare script compiles SMUI CSS, skip it to cache layers
RUN npm ci --ignore-scripts=true

COPY . .
RUN npm run prepare
FROM install AS dev
WORKDIR /client
CMD npx svelte-kit dev --host --port 3030