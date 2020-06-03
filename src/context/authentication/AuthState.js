import React, { useReducer, useContext } from "react";
import authContext from "../authentication/authContext";
import authReducer from "../authentication/authReducer";

import {
  SUCCESS_REGISTER,
  ALERT_REGISTER,
  OBTAIN_USER,
  SUCCES_LOGIN,
  ALERT_LOGIN,
  SIGN_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Functions

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
