# High-level decisions
For now, we do not care about running the individual components in production-mode. Authentization and authorization is also not a priority right now. The assumption is the user will run the application on his local machine. Database migrations are also not a priority.

# Components

## Client
SvelteKit app that serves both as a frontend and as a backend. Uses https://sveltematerialui.com as a component framework (literally Material) with codegenerated TS bindings for Apollo Client (GraphQL client for Svelte)

## Hasura
GraphQL + REST API for CRUD operations, utilizing postgres DB under the hood to store the data.

## Database
Postgres.

# Development
`docker-compose up` brings the entire stack up for development. You also want to run `npm install` in the `client` folder so the `node_modules` directory will also be populated on your host machine, so IntelliSense and similar features will work.

See the docker-compose files for port numbers of the individual services.

# Caveats

## npm install
When you add new packages to the client via `npm install`, restart the docker-compose stack with `docker-compose down -v && docker-compose up --build` so the container with the client will have the newly installed npm package.

## Client components
Read https://sveltematerialui.com/SVELTEKIT.md. You need to install the components individually and then rebuild the theme via `npm run prepare`

For now, the SMUI/common package is using a fork with a fix, until that fork gets merged to upstream: https://github.com/hperrin/svelte-material-ui/pull/431

## Hasura
Hasura requires an user to specify which tables from the postgres database are "tracked". This has to be done manually and there's no real way to autotrack all tables. As a workaround, the `hasura/entrypoint.sh` contains a CURL request that will track all tables. However, all table names that are to be tracked have to be manually listed in that request. Thus, when you create a new table in the database (via `db/*.sql` scripts), you also have to put that table into the CURL request.

https://github.com/hasura/graphql-engine/issues/1418


## GraphQL
When you want to use a new query/mutation/subscription, put it into `client/graphql/definitions.graphql` and then regenerate the types with `npm run graphql-codegen` in `./client` folder. You can use Hasura's GUI to nail down the definition of the query/mutation/subscription: http://localhost:8080/console/api/api-explorer -> Derive action -> Codegen -> Derived operation. The codegen'd definitions are in `client/src/graphql/_generated.ts`