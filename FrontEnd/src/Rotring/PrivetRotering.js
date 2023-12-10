import React, { useContext } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/Authentication';

const PrivateRoute = () =>{
  const { auth } = useContext(AuthContext);

  return auth.token ? (
    <Outlet />
  ) : (
      <Navigate to="/login"/>
  );
}
export default PrivateRoute;