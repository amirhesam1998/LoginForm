import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ username: null, token: null });

  const login = (user, token) => {
    setAuth({ user, token });
  };

  const logout = () => {
    setAuth({ user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
