const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const { typeDefs: typeDefsUser} = require('./schemas/User')
const {resolvers: resolversUser} = require('./resolvers/user');
const {followResolvers} = require('./resolvers/follow');
const {followTypeDefs} = require('./schemas/Follow');
const { verifyToken } = require('./helpers/jwt');
const { typeDefsPost } = require('./schemas/Post');
const {resolversPost} = require('./resolvers/post');

//------SETUP LISTENER----------- 
const server = new ApolloServer({
  typeDefs: [typeDefsUser, followTypeDefs, typeDefsPost],
  resolvers: [resolversUser, followResolvers, resolversPost],
  introspection: true
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: ({ req, res }) => {
      return {
        auth: () => {
          const auth = req.headers.authorization;
          if (!auth) throw new Error("Invalid Token");

          const [type, token] = auth.split(" ")
          if (!token) throw new Error("Invalid Token");
          if (type !== "Bearer") throw new Error("Invalid Token");

          const decoded = verifyToken(token);
          if(!decoded) throw new Error("Invalid Token");
          
          return decoded;
        },
      };
    }
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
