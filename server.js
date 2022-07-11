require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const gameRoutes = require('./routes/gameRoutes')
const cookieParser = require('cookie-parser')
mongoose.connect('mongodb://localhost:27017/gaming-hub')

app.use(express.static('build'))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(cookieParser())
app.use(userRoutes)
app.use(gameRoutes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})