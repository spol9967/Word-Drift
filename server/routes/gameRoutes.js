const express = require('express');
const router = express.Router();
const { getWord, submitGuess } = require('../controllers/gameController');

router.get('/word', getWord);
router.post('/guess', submitGuess);

module.exports = router;
