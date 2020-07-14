//setup data layer
// we need this to track the basket
import React, { createContext, useContext, useReducer } from 'react'

//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//to use inside a component
export const useStateValue = () => useContext(StateContext);