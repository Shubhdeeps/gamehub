const mongoose = require('mongoose')

const Game = new mongoose.Schema(
	{
        id: { type: String },
        name: { type: String, required: true, unique: true },
        genres: { type: Array, "default": [] },
        description: { type: String },
        rating: { type: Number, "default": 0 },
        tags: { type: Array, "default": [] },
        developers: { type: Array, "default": [] },
        released: { type: String },
        website: { type: String }
	},
	{ collection: 'game-data' }
)

const model = mongoose.model('GamesData', Game)

module.exports = model