import React from 'react';
import './Home.css'; // Import CSS file for styling
import { Link, useNavigate} from 'react-router-dom'; // Changed useNavigate to useHistory
import { Outlet } from 'react-router-dom';
import { useAuth } from './Auth';
import axios from 'axios'; // Added import for axios

const Home = () => {
  const { isLoggedIn, logout } = useAuth();
  const history = useNavigate(); // Changed useNavigate to useHistory

  const handleSignOut = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const response = await axios.post('https://gaming-backend-f2n7.onrender.com/logout', {}, {
        headers: { Authorization: token } // Include token in request headers
      });

      if (response.status === 200) { // Check response status code
        logout();
        history('/login');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
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
            <li><Link to={"/"}>Home</Link></li> 
            <li><Link to={"/news"}>News</Link></li>
            <li><Link to={"/profile"}>My Profile</Link></li>
            <li><Link to={"/games"}>Games</Link></li>
            <li><Link to={"/library"}>Library</Link></li> 
            <li><Link to={"/mydashboard"}>My Dashboard</Link></li>
            <li><Link to={"/settings"}>Setings</Link></li>

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
