import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export default new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
    cache: new InMemoryCache()
})