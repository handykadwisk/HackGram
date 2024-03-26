const { ApolloServer } = require ('@apollo/server');
const { startStandaloneServer } = require ('@apollo/server/standalone');

const typeDefs = `#graphql
  
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const resolvers = {
    Query: {
      books: () => books,
    },
  };
  
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
  });
  
 (async ()=>{
     const { url } = await startStandaloneServer(server, {
       listen: { port: 4000 },
     });
     console.log(`🚀  Server ready at: ${url}`);  
 })();
