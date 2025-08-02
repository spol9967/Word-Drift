exports.calculateSimilarity = (guess, target) => {
  // Levenshtein distance simple version
  if (!guess || !target) return 0;
  let distance = 0;
  const len = Math.max(guess.length, target.length);

  for (let i = 0; i < len; i++) {
    if (guess[i] !== target[i]) distance++;
  }

  return Math.round(((len - distance) / len) * 100); // percentage
};
