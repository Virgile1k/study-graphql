const {ApolloServer } = require("apollo-server");
const {typeDefs} =require ("./schema/types-defs");
const {resolvers} =require("./schema/resolvers");

const server =new ApolloServer({typeDefs,resolvers });
server.listen().then(({url}) => {
    console.log(`API server is running at ${url}`);
})