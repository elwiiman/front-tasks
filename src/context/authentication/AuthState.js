import React, { useReducer, useContext } from "react";
import authContext from "../authentication/authContext";
import authReducer from "../authentication/authReducer";
import axiosClient from "../../config/axios";

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
  const signInUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/users", data);
      dispatch({ type: SUCCESS_REGISTER, payload: response.data });
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({ type: ALERT_REGISTER, payload: alert });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        signInUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
