const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
const { initializeConnection, populateDB } = require("./data");
const mongoose = require("mongoose");

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  initializeConnection();

  if (process.env.NODE_ENV === "development") {
    populateDB();
  }

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    server.listen().then(({ url }) => {
      console.log(`Server listening on ${url}`);
    });
  });
};

main();
