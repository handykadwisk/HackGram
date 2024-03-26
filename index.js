const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const { typeDefs: typeDefsUser} = require('./schemas/User')
const {resolvers: resolversUser} = require('./resolvers/user')


//------SETUP LISTENER----------- 
const server = new ApolloServer({
  typeDefs: [typeDefsUser],
  resolvers: [resolversUser],
  introspection: true
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
