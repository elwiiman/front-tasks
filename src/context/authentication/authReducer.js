import {
  SUCCESS_REGISTER,
  ALERT_REGISTER,
  OBTAIN_USER,
  SUCCES_LOGIN,
  ALERT_LOGIN,
  SIGN_OUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTER:
      localStorage.setItem("token", action.payload.token);
      return { ...state, authenticated: true, message: null };

    case ALERT_REGISTER:
      return { ...state, token: null, message: action.payload };
    default:
      return state;
  }
};
