import {
  SUCCESS_REGISTER,
  ALERT_REGISTER,
  OBTAIN_USER,
  SUCCES_LOGIN,
  ALERT_LOGIN,
  LOGOUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SUCCES_LOGIN:
    case SUCCESS_REGISTER:
      localStorage.setItem("token", action.payload.token);
      return { ...state, authenticated: true, message: null, loading: false };

    case ALERT_LOGIN:
    case ALERT_REGISTER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
        authenticated: null,
        loading: false,
        user: null,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: null,
        authenticated: null,
        loading: false,
        user: null,
      };

    case OBTAIN_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
        message: null,
      };

    default:
      return state;
  }
};
