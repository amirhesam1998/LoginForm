import React, { createContext, useState, useEffect } from 'react';

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
  }, [auth.token]);

  const login = (username, token, first_name) => {
    setAuth({ username, token, first_name });
  };

  const logout = () => {
    setAuth({ username: '', token: '', first_name: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
