import React, { useState } from 'react';
import './Home.css'; // Import CSS file for styling
import { Link, useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const history = useNavigate();

  const handleSignOut = () => {
    // Clear authentication status and navigate to sign-in page
    setIsLoggedIn(false);
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
              <button className='signInBtn'><Link to={'/login'}>Sign In</Link></button>
              <button className='registerBtn'><Link to={'/register'}>Register</Link></button>
            </>
          )}
        </div>
      </div>

      <div className="main">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>News</li>
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
