import React, { createContext, useReducer, useEffect } from "react";
import { gymReducer } from "../reducers/";
import { gymListings } from "../actions/gymActions";
//INITIAL STATE
const initialState = {
  gymlistings: [],
  error: null,
  loading: null,
};

export const GymContext = createContext(initialState);

//GYMPROVIDER
export const GymProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gymReducer, initialState);
  const getGyms = gymListings.bind(null, dispatch);
  useEffect(() => {
    getGyms();
    //eslint-disable-next-line
  }, []);
  return (
    <GymContext.Provider
      value={{
        Gyms: state.gymlistings,
        getGyms,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};
