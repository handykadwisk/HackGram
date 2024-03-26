const User = require('../models/User')

const typeDefs = `#graphql
    type User {
    _id: ID
    name: String
    username: String
    email: String
    phone: String
    }

    type UserDetail {
    _id:ID
    name: String
    username: String
    email:String
    phone: String
    }

    type Token{
    accessToken: String
    }

    type Query{
    getDetail(id:ID):User
    users:[User]
    }

    type Mutation{
    regis(email:String, name:String, username:String, password:String): User
    login(email:String!, password:String):Token
    }
`;

module.exports = {typeDefs}
