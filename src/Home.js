import React from 'react';
import './Home.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="left">
          <span>POGR</span>
        </div>
        <div className="right">
        <button className='SignIn' ><Link to={'/login'}>Sign In</Link></button>
        <button className='register'><Link to={'/register'}>Register</Link></button>
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
