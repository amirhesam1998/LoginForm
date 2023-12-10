import React, { useContext } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../Context/Authentication';
//import Users from '../Component/Page/User/Users';

const PrivateRoute = () =>{
  const { auth } = useContext(AuthContext);

  return auth.token ? (
    <Outlet />
  ) : (
      <Navigate to="/"/>
  );
}
export default PrivateRoute;