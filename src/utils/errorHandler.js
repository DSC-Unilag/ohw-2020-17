const errorMessage = {
  404: "Sorry Resource Not Found",
  500: "Oops! Something went wrong",
  401: "you have to login again",
  400: "invalid credentials",
  isLoggedIn: "you are already logged in",
};
const logoutInstance = ({ response, request }, dispatch) => {
  if ((response && response.status === 401) || request) {
    localStorage.removeItem("id_token");
    dispatch({ type: "LOG_OUT_SUCCESS" });
  }

  return "";
};
const logInInstance = (response) => {
  let message = errorMessage[500];
  if (response && response.status === 400) {
    message = errorMessage[response.status];
  }
  return message;
};

export const errorHandler = (instance, asyncCaller) => (...args) =>
  asyncCaller(...args).catch((err) => {
    if (err.response || err.request) {
      switch (instance) {
        case "LOGOUT":
          err.message = logoutInstance(err, args[0]);
          break;
        case "LOGIN":
          err.message = logInInstance(err.response);
          break;
        default:
          err.message = errorMessage[err.response.status];
      }
    }
    args[0]({ type: "Error", payload: err.message });
  });
