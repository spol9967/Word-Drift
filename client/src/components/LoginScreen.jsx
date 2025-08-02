import React from 'react';
import { useState, useEffect } from 'react';



function LoginScreen({ onLogin,  onSignup}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // if (username && password) {
    //   onLogin({ username });
    // } else {
    //   alert('Enter credentials');
    // }
    onLogin({"nama": "Shubham", "username": "Spol", "password": "12345"});
  };
    const handleSignup = () => {
    onSignup(true);
    console.log('Switching to signup');
  };

  return (
    <div className="login">
      <h2>Login to Word Drift</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <div className='loginBtns'>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}


export default LoginScreen;

