import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

    //pass to action
  };

  return (
    <div className="form-usuario">
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
