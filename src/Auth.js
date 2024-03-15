import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const login = (newToken) => {
    setIsLoggedIn(true);
    setToken(newToken);
    sessionStorage.setItem('isLoggedIn', true);
    localStorage.setItem('token', newToken);
  console.log(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken('');
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
