import React, { useState } from 'react';
import axios from 'axios';

const GameInput = ({ onResult }) => {
  const [word, setWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/api/game/guess', { word });
    onResult({ word, score: res.data.score });
    setWord('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Enter word" />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GameInput;
