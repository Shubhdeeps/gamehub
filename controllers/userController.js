require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


const registerErrorHandling = (error) => {
 if(error.message.includes('UserData validation failed')){
    const errResult = error.message.replace('UserData validation failed:', '')
    return errResult
 }

 if(error.message.includes('duplicate key error collection')){
     const errResult = error.keyValue[Object.keys(error.keyValue)[0]]
     return `${Object.keys(error.keyValue)[0]} ${errResult} already exists`
 }else{
    return false
 }

}


module.exports.register_user = async (request, response) => {
    if(request.body.password.length < 6){
        return response.status(400).send('Password must contain atleast 6 characters')
    }

    const hashedPassword = await bcrypt.hash(request.body.password, 10)
    const user = {username: request.body.username, email: request.body.email, password: hashedPassword, games: []}
   try{
       await User.create({
           username: user.username,
           email: user.email,
           password: user.password,
           games: user.games
        })
        response.status(201).send('User register successfully')
    }catch(error){
        const errMessage = registerErrorHandling(error)
        response.status(400).send(errMessage)
    }
}

module.exports.login_user = async (request, response) => {
    const user = await User.findOne({
        email: request.body.email,
    })
    if(!user){
        return response.status(401).send('User not found, please check your email address')
    }

    try{
        if(await bcrypt.compare(request.body.password, user.password)){
            const accessToken = jwt.sign({...user}, process.env.ACCESS_TOKEN_SECRET)

            response.cookie('jwt', accessToken, {httpOnly: true})
            response.status(200).send(user.username)
        } else{
            response.status(401).send('Wrong Password')
        }
    } catch{
        response.status(500).send('Error occur')
    }
}

module.exports.login_logout = (request, response) => {
    response.cookie('jwt', '', {maxAge: 1})
    response.status(200).send('User Logged out')
}

module.exports.get_username = async (username, response) => {
    const user = await User.findOne({
        username: username,
    })
    response.status(200).send(user.username)
}

module.exports.get_favourites = async (username, response) => {
    const user = await User.findOne({
        username: username,
    })
    response.status(200).send(user.games)

}

module.exports.add_favourite_game = async (new_game, username, response) => {
    const user = await User.findOne({
        username: username,
    })
    const { games } = user
    games.push(new_game)
    const filter = { username: username }
    const options = { upsert: true }
    const updateUser = {
        $set: {
            games: games
        }
    }
    try{
        await User.updateOne(filter, updateUser, options)
        response.send('Successfully added')
    }catch{
        response.status(500).send()
    }
}


module.exports.remove_favourite_game = async (game_tobe_removed, username, response) => {
    const user = await User.findOne({
        username: username,
    })
    const { games } = user
    const filtered_games = games.filter(x => x.id !== game_tobe_removed)
    const filter = { username: username }
    const options = { upsert: true }
    const updateUser = {
        $set: {
            games: filtered_games
        }
    }
    try{
        await User.updateOne(filter, updateUser, options)
        response.send('Successfully removed')
    }catch{
        response.status(500).send()
    }
}