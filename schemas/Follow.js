const followTypeDefs = `#graphql
   scalar Date
   type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: Date
    updatedAt: Date
  }
  type Query {
    follows: [Follow]
  }
  type Mutation {
    followUser(_id: ID!): Follow
  }
`;

module.exports = { followTypeDefs };
