import "reflect-metadata";
import * as express from "express";
import { verify } from "jsonwebtoken";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";
import { MyContext } from "./common/myContext";
import { createDBConnection } from "./utils/createDBConnection";

const startServer = async (): Promise<any> => {
  const app = express();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => {
      return { req, res };
    },
  });

  await createDBConnection();

  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT || 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

startServer();
