import React, { createContext, useState, useEffect } from 'react';
import Axios from '../API/Axios';

const LOGOUT_URL = '/token/logout/'
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('token');
  const storedName = localStorage.getItem('first_name')
  const [auth, setAuth] = useState({
    username: '',
    token: storedToken,
    first_name: storedName,
  });
  
  //for stay in users page untill user logout
  useEffect(() => {
    localStorage.setItem('token', auth.token);
    localStorage.setItem('first_name',auth.first_name)
  }, [auth.token,auth.first_name]);

  const login = (username, token, first_name) => {
    setAuth({ username, token, first_name });
  };

  const logout = async (e) => {
    try {
      await Axios.post(LOGOUT_URL, auth.token, {
        headers: { 'Content-Type': 'application/json' },
      });
      localStorage.removeItem('token');
      localStorage.removeItem('first_name');
      setAuth({ username: '', token: '', first_name: '' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
