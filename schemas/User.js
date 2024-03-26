const User = require('./model/User')
const { comparePassword } = require('./helpers/bcrypt')
const { signToken } = require('./helpers/jwt')

const typeDefs = `#graphql
    type User {
    _id: ID!
    username: String
    email: String
    phone: String
    address: String
    followerDetail:[UserDetail]
    followingDetail:[UserDetail]
    }

    type UserDetail {
    _id:ID
    name: String
    email:String
    phone: String
    }

    type Address{
    street:String
    suite:String
    city:String
    }

    type Token{
    accessToken: String
    }

    type Query{
    getDetail(id:ID):User
    }

    type Mutation{
    login(email:string!, password:string):Token
    }
`;

const resolvers = {
    Query: {
        getDetail: async (_, args, contextValues) => {
            contextValues.auth()
            const { id } = args;
            const user = await User.getDetail(id)
            console.log(user);
            return user
        },
    },

    Mutation: {
        login: async (_, args) => {
            try {
                const { email, password } = args;

                const user = await User.findByEmail(email)

                if (!user) { throw new Error('email/password not found') }

                const validated = comparePassword(password, user.password)

                if (!validated) { throw new Error('email/password not found') }

                const token = { accesToken: signToken({ id: user._id, email: user.email }) }

                return token

            } catch (error) {
                throw error
            }
        }
    }

}

module.exports = { typeDefs, resolvers }
