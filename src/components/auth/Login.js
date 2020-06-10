import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alertContext from "../../context/alerts/alertContext";
import authContext from "../../context/authentication/authContext";

const Login = (props) => {
  // extraction context
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authsContext = useContext(authContext);
  const { message, authenticated, logIn } = authsContext;

  //in case of wrong pass or user doesnt exist
  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
    console.log(message);
    //eslint-disable-next-line
  }, [message, authenticated, props.history]);

  //state for login
  const [user, setUser] = useState({ email: "", password: "" });

  //extract state
  const { email, password } = user;

  //function for detect cahnges in inputs
  const onChangeLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //function to submit form
  const onSubmit = (e) => {
    e.preventDefault();
    //validate not empty fields
    if (email.trim === "" || password.trim() === "") {
      showAlert("All fields are mandatory", "alerta-error");
    }

    //pass to action
    logIn({ email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Obtain an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
