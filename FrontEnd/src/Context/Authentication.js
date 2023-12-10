import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ username: null, token: null });

  const login = (username, token) => {
    console.log('Received Token:', token);
    console.log('Received Username:', username);
    setAuth({ username, token });
  };

  const logout = () => {
    setAuth({ username: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
