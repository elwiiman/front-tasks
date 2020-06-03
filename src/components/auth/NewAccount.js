import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import alertContext from "../../context/alerts/alertContext";
import authContext from "../../context/authentication/authContext";

const NewAccount = (props) => {
  // extraction context
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authsContext = useContext(authContext);
  const { message, authenticated, signInUser } = authsContext;

  //in case user is registered or authenticated or a duplicate register
  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
  }, [message, authenticated, props.history]);

  //state for login
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  //extract state
  const { email, name, password, confirmPassword } = user;

  //function for detect cahnges in inputs
  const onChangeLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //function to submit form
  const onSubmit = (e) => {
    e.preventDefault();
    //validate not empty fields

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      showAlert("All fields are mandatory", "alerta-error");
      return;
    }

    //password minimum of 6 characters
    if (password.length < 6) {
      showAlert("Password must be at least of 6 characters", "alerta-error");
      return;
    }
    //https://www.the-art-of-web.com/javascript/validate-password/

    //check both passwords are the same.
    if (password !== confirmPassword) {
      showAlert("Passwords are not the same", "alerta-error");
      return;
    }

    //pass to action
    signInUser({ name, email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Sign in</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={onChangeLogin}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your mail"
              value={email}
              onChange={onChangeLogin}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Your password"
              onChange={onChangeLogin}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Your confirm password"
              onChange={onChangeLogin}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
