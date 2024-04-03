import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typesofUser } from "./graohql/schema.js";
import { myResolver } from "./graohql/resolvers.js";

const server = new ApolloServer({
  typeDefs: typesofUser,
  resolvers: myResolver,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server is running at ${url}`);
