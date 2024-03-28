const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const signToken = (payload) => {
    const token = jwt.sign(payload, secret)
    return token
}

const verifyToken = ( token ) =>{
    const data = jwt.verify(token, secret)
    return data
}

module.exports = {signToken, verifyToken}
