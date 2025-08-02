import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';
import './styles/loading.css';
import './styles/login.css';
import './styles/game.css';
import './styles/GameScreen.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("SPOL");

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Splash timer
  }, []);

  if (loading) return <LoadingScreen />;
  if (!user) return <LoginScreen onLogin={setUser} />;
  return <GameScreen />;
}

export default App;
