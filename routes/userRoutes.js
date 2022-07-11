const { Router } = require('express');
const userController = require('../controllers/userController')
const { authenticateToken } = require('../middlewares/autheticateTokenMiddleware')
const router = Router()


// To register a new user
router.post('/api/register', userController.register_user)

//To login a user
router.post('/api/login', userController.login_user)

//TO logout the user
router.post('/api/logout', userController.login_logout)

//to get user if logged in 
router.get('/api/user', authenticateToken, async (request, response) => {
    const { username } = request.user._doc
    userController.get_username(username, response)

})

// to get user's favourite games and verify access token
router.get('/api/user/favourites', authenticateToken, async (request, response) => {
    const { username } = request.user._doc
    userController.get_favourites(username, response)
} )

// to add a favourite game in user's list
router.post('/api/user/favourites/add', authenticateToken, (request, response) => {
    const { username } = request.user._doc
    const new_games = request.body.newgame
    userController.add_favourite_game(new_games, username, response)
})

// to remove a favourite game in user's list
router.post('/api/user/favourites/remove', authenticateToken, (request, response) => {
    const { username } = request.user._doc
    const game_tobe_removed = request.body.newgame
    userController.remove_favourite_game(game_tobe_removed, username, response)
})



module.exports = router