import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/authentication/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authsContext = useContext(authContext);
  const { authenticated, loading, obtainUserAuthenticated } = authsContext;

  useEffect(() => {
    obtainUserAuthenticated();
    //eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
