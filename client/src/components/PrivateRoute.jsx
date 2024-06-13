import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = Auth.loggedIn();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;