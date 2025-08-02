import React, { useState } from 'react';
import axios from 'axios';

function SignupModal({ onClose, onSignup }) {
  const [form, setForm] = useState({
    name: '', email: '', username: '', password: '', confirmPassword: ''
  });
  const [otpStage, setOtpStage] = useState(false);
  const [otp, setOtp] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) return alert('Passwords do not match');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      if (res.data.status === 'otp_sent') {
        setOtpStage(true);
      }
    } catch (err) {
      console.error(err);
      alert(err.response.data.message || 'Signup failed');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email: form.email,
        otp
      });
      if (res.data.status === 'verified') {
        alert('Signup successful!');
        onClose();
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      console.error(err);
      alert('OTP verification error');
    }
  };

   const handleClose = () => {
    onSignup(false);
    console.log('Switching to Login');
  };

  return (
    <div className="modal-backdrop">
      <div className="signup-modal">
        <h2>{otpStage ? 'Verify OTP' : 'Create Account'}</h2>

        {!otpStage ? (
          <>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
            <button onClick={handleSubmit}>Sign Up</button>
          </>
        ) : (
          <>
            <p>We’ve sent a 6-digit OTP to your email</p>
            <input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
            <button onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        <button className="close-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default SignupModal;
