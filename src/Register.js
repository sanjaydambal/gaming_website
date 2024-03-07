
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const history = useNavigate();

  const handleRegister = () => {
    // Your registration logic here
    // Redirect to sign in after successful registration
    history.push('/signin');
  };

  return (
    <div className="register">
      <img src="path_to_your_logo" alt="POGR Logo" />
      <h1>Get Started</h1>
      <p>Already have an account? <Link to="/signin">Click to sign in</Link></p>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
