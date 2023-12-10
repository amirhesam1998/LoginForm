import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ username: null, token: null });

  const login = (username, token ,first_name) => {

    setAuth({ username, token,first_name });
  };

  const logout = () => {
    setAuth({ username: null, token: null, first_name :null});
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
