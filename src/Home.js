import React, { useState, useEffect } from 'react';
import './Home.css'; // Import CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from './Auth';

const Home = () => {
 const { isLoggedIn,logout } = useAuth();
  const history = useNavigate();

  const handleSignOut = () => {
       logout()
       history('/login');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="left">
          <span>POGR</span>
        </div>
        <div className="right">
          {isLoggedIn ? (
            <button className='signOutBtn' onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <button className='registerBtn'><Link to={'/login'}>Login </Link></button>
              <button className='registerBtn'><Link to={'/register'}>Register</Link></button>
            </>
          )}
        </div>
      </div>

      <div className="main">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li><Link to={"/news"}>News</Link></li>
          </ul>
        </div>
        
        <div className="content">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
