import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import SignupModal from './components/SignupModal';
import GameScreen from './components/GameScreen';
import './styles/loading.css';
import './styles/login.css';
import './styles/signupModal.css';
import './styles/game.css';
import './styles/GameScreen.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSignup, setSignup] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Splash timer
  }, []);

  if (loading) return <LoadingScreen />;
  if(user) return <GameScreen />;
  if (isSignup) return <SignupModal onLogin={setUser} onSignup = {setSignup} />;
  if (!isSignup) return <LoginScreen onLogin={setUser} onSignup = {setSignup}/>;
}

export default App;
