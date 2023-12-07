import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../../Context/Authentication';

const PrivateRoute = ({ element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return auth.user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
