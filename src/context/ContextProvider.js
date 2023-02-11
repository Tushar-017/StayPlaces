import React, { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"

// contains all our public values
const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },
}

const Context = createContext(initialState)

// created a hook to extract the value of context easily
export const useValue = () => {
  return useContext(Context)
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default ContextProvider
