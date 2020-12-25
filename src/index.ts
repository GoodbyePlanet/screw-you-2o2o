import "reflect-metadata";
import express from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import UserResolver from "./resolvers/UserResolver";

(async () => {

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({resolvers: [UserResolver]})
  });

  apolloServer.applyMiddleware({app});

  app.listen(2020, () => console.log("Screw you 2o2o on http://localhost:2020/graphql"));

})()