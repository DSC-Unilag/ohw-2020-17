import React, { useEffect } from "react";
import { userReducer } from "../reducers";
import { loginUser, signOut } from "../actions";
//import worker from "workerize-loader!../webWorkers/sessionChecker.js"; // eslint-disable-line import/no-webpack-loader-syntax

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function UserProvider({ children }) {
  const sessionWorker = new Worker("/webWorkers/sessionChecker.js");

  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
    isLoading: false,
    error: "",
    user: JSON.parse(localStorage.getItem("id_token")) || {},
  });

  useEffect(() => {
     sessionWorker.onmessage = handleSessionWorker;
    //if the user is not logged in terminate the worker
    if (!state.isAuthenticated) {
      sessionWorker.terminate();
    }
    return () => {
      sessionWorker.terminate();
    };
  }, [sessionWorker, state.isAuthenticated]);

  function handleSessionWorker(event) {
    if (event && event.data) {
      //check if the session has expired

      const { sessionExpired, message } = event.data;
      if (message) {
        console.log(message);
      }
      if (sessionExpired) {
        //call signout action
        signOut(dispatch);
      }
    }
  }
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################
