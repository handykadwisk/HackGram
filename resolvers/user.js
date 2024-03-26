const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const User = require('../models/User');
const resolvers = {
    Query: {
        // getDetail: async (_, args, contextValues) => {
        //     contextValues.auth()
        //     const { id } = args;
        //     const user = await User.getDetail(id)
        //     console.log(user);
        //     return user
        // },
        // users: async()=>{
        //     const users = await User.findAll()
        //     return users
        // }


    },

    Mutation: {
        regis: async (_, args) => {
            try {
                const { name, username, email, password } = args
                const newUser = ({
                    name,
                    username,
                    email,
                    password:hashPassword(password)
                })

                let result = await User.insert(newUser)
                newUser._id = result.insertedId
                console.log(result);
                return newUser
            } catch (error) {
                throw error
            }
        },
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
module.exports = { resolvers }