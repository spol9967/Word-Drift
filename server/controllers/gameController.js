const { calculateSimilarity } = require('../utils/similarity');
const correctWord = 'banana'; // placeholder

exports.checkWord = (req, res) => {
  const guessedWord = req.body.word;
  const score = calculateSimilarity(guessedWord, correctWord);
  res.json({ score });
};
