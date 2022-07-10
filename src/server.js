import { ApolloServer } from "apollo-server";
import typeDefsUser from "./users/types.js";
import UserResolvers from './users/resolvers.js';
import UserAPI from "./datasources/userAPI.js";
import 'dotenv/config';

const { PORT } = process.env;

const server = new ApolloServer({
  typeDefs: [typeDefsUser],
  resolvers: [UserResolvers],
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      userAPI: new UserAPI(),
    };
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server started at ${url}`);
});


