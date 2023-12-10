import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('token');
  const [auth, setAuth] = useState({
    username: null,
    token: storedToken,
    first_name: null,
  });
  
  //for stay in users page untill user logout
  useEffect(() => {
    localStorage.setItem('token', auth.token);
  }, [auth.token]);

  const login = (username, token, first_name) => {
    setAuth({ username, token, first_name });
  };

  const logout = () => {
    setAuth({ username: null, token: '', first_name: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
