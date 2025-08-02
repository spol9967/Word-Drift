const express = require('express');
const { checkWord } = require('../controllers/gameController');

const router = express.Router();

router.post('/guess', checkWord);

module.exports = router;
