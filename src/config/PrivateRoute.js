/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props =>
      isAuthenticated ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
