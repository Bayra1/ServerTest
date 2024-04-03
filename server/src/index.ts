import { ApolloServer } from "@apollo/server";
import { typesofUser } from "./graohql/schema.js";
import { myResolver } from "./graohql/resolvers.js";

const server = new ApolloServer({
  typeDefs: typesofUser,
  resolvers: myResolver,
});

const start = async () => {
  const { url } = await server.listen({ port: 4000 });
  console.log(`Server is running at ${url}`);
};

start();
