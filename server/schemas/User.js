const typeDefs = `#graphql
    type User {
    _id: ID
    name: String!
    username: String!
    email: String!
    password: String
    followerDetail: [UserDetail]
    followingDetail: [UserDetail]
  }

  type UserDetail {
    _id: ID
    name: String!
    username: String!
    email: String!
  }

  type Query {
    userById(_id: ID): User
    searchUser(username: String!): User,
    myProfile: User

  }

  type Token {
    accessToken: String
  }

  type Mutation {
    register(name: String!, username: String!, email: String!, password: String!): User
    login(username: String!, password: String!): Token
  }
`;

module.exports = {typeDefs}
