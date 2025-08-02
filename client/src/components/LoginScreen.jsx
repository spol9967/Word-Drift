import React from 'react';
import { useState, useEffect } from 'react';



function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin({ username });
    } else {
      alert('Enter credentials');
    }
  };

  return (
    <div className="login">
      <h2>Login to Word Drift</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginScreen;

