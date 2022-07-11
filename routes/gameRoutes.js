const { Router } = require('express');
const gameController = require('../controllers/gameController');
const { authenticateToken } = require('../middlewares/autheticateTokenMiddleware');

const router = Router();

//to add a new game
router.post('/api/create', authenticateToken, gameController.create_new_game);

// to fetch all the games from database
router.get('/api/games', gameController.fetch_all_games);

module.exports = router