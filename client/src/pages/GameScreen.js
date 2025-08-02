import React, { useState } from 'react';
import GameInput from '../components/GameInput';

const GameScreen = () => {
  const [guesses, setGuesses] = useState([]);

  const handleResult = ({ word, score }) => {
    setGuesses([...guesses, { word, score }]);
  };

  return (
    <div>
      <h1>Word Drift</h1>
      <GameInput onResult={handleResult} />
      <ul>
        {guesses.map((g, i) => (
          <li key={i}>{g.word} → {g.score}%</li>
        ))}
      </ul>
    </div>
  );
};

export default GameScreen;
