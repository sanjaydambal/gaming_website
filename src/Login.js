// Login.js
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();

  const handleLogin = () => {
    // Your login logic here
    // Redirect to dashboard after successful login
    history.push('/dashboard');
  };

  return (
    <div className="login">
      <img src="path_to_your_logo" alt="POGR Logo" />
      <h1>Welcome Back</h1>
      <p>Don't have an account? <Link to="/register">Create a new one</Link></p>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
