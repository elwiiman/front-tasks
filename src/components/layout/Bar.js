import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import authContext from "../../context/authentication/authContext";

const Bar = (props) => {
  //Extract authenticacion info from context
  const authsContext = useContext(authContext);
  const { user, obtainUserAuthenticated, logOut } = authsContext;

  useEffect(() => {
    obtainUserAuthenticated();
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hola <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Bar;
