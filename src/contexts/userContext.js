import React, { useEffect } from "react";
import { userReducer } from "../reducers";
import { loginUser, signOut } from "../actions";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function UserProvider({ children }) {
  
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
    isLoading: false,
    error: "",
    user: JSON.parse(localStorage.getItem("id_token")) || {},
  });

  
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
