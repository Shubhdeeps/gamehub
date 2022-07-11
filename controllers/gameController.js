const Game = require('../models/games.modal');

module.exports.create_new_game =  async (request, response) => {
    const {id, name, genres, description, rating, tags, developers, released, website} = request.body
    try{
        await Game.create({
            id,
            name,
            genres,
            description,
            rating,
            tags,
            developers,
            released,
            website
         })

         response.status(201).send('game saved')
     }catch(error){
         response.status(500).send(error)
     }
}

module.exports.fetch_all_games = async (request, response) => {
    const games = await Game.find({})
    response.json(games)
}