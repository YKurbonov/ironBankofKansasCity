import React, { createContext, useContext, useReducer } from "react";

export const StContext = createContext();

//Provider
export const StaProvider = ({ reducer, initialState, children }) => (
  <StContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StContext.Provider>
);

export const useStValue = () => useContext(StContext);