const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = new mongoose.Schema(
	{
		username: { 
			type: String, 
			required: [true, 'Please enter the username'], 
			unique: true
		},
		email: { 
			type: String, 
			required: [true, 'Please enter the email address'], 
			unique: true,
			lowercase: true,
			validate: [isEmail, 'Please enter a valid email address']
		},
		password: { 
			type: String, 
			required: [true, 'Please enter the password']
		},
		games: { type: Array, "default": [] },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model