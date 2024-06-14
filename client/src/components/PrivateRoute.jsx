import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import Auth from '../utils/auth';

const PrivateRoute = () => {
  const isLoggedIn = Auth.loggedIn();
  const location = useLocation();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
