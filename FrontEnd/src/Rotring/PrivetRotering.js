// PrivetRotering.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authentication';

const PrivateRoute = ({ element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  console.log('Auth object in PrivateRoute:', auth);

  return auth.token ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
