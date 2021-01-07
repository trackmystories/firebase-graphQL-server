const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const admin = require("firebase-admin");
var serviceAccount = require("./api/provident-mobile-app.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://provident-mobile-app-274907.firebaseio.com"
});




const PropertyAPI = require('./datasources/property');

const internalEngineDemo = require('./engine-demo');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    propertyAPI: new PropertyAPI(),
  }),
  engine: {
    apiKey: process.env.APOLLO_KEY,
    ...internalEngineDemo,
    reportSchema: true
  }
});

const app = express();


server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);
