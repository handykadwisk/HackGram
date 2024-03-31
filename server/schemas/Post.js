const { GraphQLError } = require("graphql");
const Post = require("../models/post");

const typeDefsPost = `#graphql
  scalar Date

 type Post {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String!
    authorId: ID!
    comments: [Comment]
    likes: [Like]
    createdAt: Date!
    updatedAt: Date!
    author: Author
  }
  type Author {
    _id: ID
    name: String
    username: String
    email: String
  }
  type Comment {
    content: String!
    username: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Like {
    username: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    posts: [Post]
    post(_id: ID): Post
  }
  
  type Mutation {
    addPost(content: String!, tags: [String], imgUrl: String): Post
    commentPost(_id: ID!, content: String!): Comment
    likePost(_id: ID!): Like
    unlikePost(_id: ID!): Like
  }
`;
module.exports = { typeDefsPost };