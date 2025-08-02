import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const dummyStages = [
  { word: 'apple', guessed: 'ample', score: 65 },
  { word: 'sunset', guessed: 'sunshine', score: 72 },
  { word: 'galaxy', guessed: 'galactic', score: 80 }
];

function GameScreen() {
  const [currentStage, setCurrentStage] = useState(0);
  const [guess, setGuess] = useState('');
  const [wordData, setWordData] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    fetchWord();
  }, []);

   const fetchWord = async () => {
    try {
      const res = await axios.get('http://192.168.0.185:5000/api/game/word');
      setWordData(res.data);
      console.log('fetching word:', res.data);
    } catch (err) {
      console.error('Error fetching word:', err);
    }
  };

   const submitGuess = async () => {
    try {
      const res = await axios.post('http://192.168.0.185:5000/api/game/guess', { guess });
      setLastResult(res.data);
      setGuess('');
      fetchWord(); // get next word after guess
    } catch (err) {
      console.error('Error submitting guess:', err);
    }
  };

  if (!wordData) return <div>Loading game...</div>;

  return (
    <div className="game">
      <h2>Stage</h2>
      <p>Word received from server (will be hidden in live mode)</p>
      <p><strong>{wordData.word}</strong></p>
      <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess"/>
      <button onClick={submitGuess}>Submit Guess</button>
      {lastResult && (
        <div className="result">
          <p>✅ Your Guess: {lastResult.guess}</p>
          <p>🎯 Target Word: {lastResult.correctWord}</p>
          <p>📊 Score: {lastResult.score}%</p>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
