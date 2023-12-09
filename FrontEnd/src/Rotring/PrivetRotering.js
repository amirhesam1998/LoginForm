// PrivetRotering.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authentication';

const PrivateRoute = ({ element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return auth.username ? ( // Changed from auth.user to auth.username
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
