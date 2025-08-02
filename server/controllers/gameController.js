const words = require('../words.json');
const { getSimilarity } = require('../utils/similarity');

let currentWordIndex = 0;

exports.getWord = (req, res) => {
  const word = words[currentWordIndex];
  res.json({ word }); // frontend can hide or use it for debug
  console.log(`Current word sent: ${word}`);
};

exports.submitGuess = (req, res) => {
  const { guess } = req.body;
  const correctWord = words[currentWordIndex];
  const score = getSimilarity(guess, correctWord);
  const response = {
    correctWord,
    guess,
    score
  };

  if(score ===100) {currentWordIndex++;}
  if (currentWordIndex >= words.length) currentWordIndex = 0;

  res.json(response);
};
