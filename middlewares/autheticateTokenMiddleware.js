require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports.authenticateToken = (request, response, next) => {
    const token = request.cookies.jwt  
    if(token == null) {
        return response.status(401).send('Login required')
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if(error){ return response.sendStatus(403)}
        request.user = decoded
        next()
    })
}