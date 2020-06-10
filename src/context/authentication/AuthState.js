import React, { useReducer } from "react";
import authContext from "../authentication/authContext";
import authReducer from "../authentication/authReducer";
import axiosClient from "../../config/axios";
import sendTokenByHeader from "../../config/tokenAuth";

import {
  SUCCESS_REGISTER,
  ALERT_REGISTER,
  OBTAIN_USER,
  SUCCES_LOGIN,
  ALERT_LOGIN,
  LOGOUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Functions
  const signInUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/users", data);
      dispatch({ type: SUCCESS_REGISTER, payload: response.data });

      //Obtain user
      obtainUserAuthenticated();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };

      dispatch({ type: ALERT_REGISTER, payload: alert });
    }
  };

  // Obtain user atuthenticated
  const obtainUserAuthenticated = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // send token by headers
      sendTokenByHeader(token);
    }
    try {
      const response = await axiosClient.get("/api/auth");
      dispatch({ type: OBTAIN_USER, payload: response.data.user });
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({ type: ALERT_LOGIN, payload: alert });
    }
  };

  //Function for login
  const logIn = async (data) => {
    try {
      const response = await axiosClient.post("/api/auth", data);
      dispatch({ type: SUCCES_LOGIN, payload: response.data });

      obtainUserAuthenticated();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({ type: ALERT_LOGIN, payload: alert });
    }
  };

  //Function for Logout
  const logOut = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        signInUser,
        obtainUserAuthenticated,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
