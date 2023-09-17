import React, { createContext, useContext, useEffect, useReducer } from "react"
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
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (currentUser) {
      dispatch({ type: "UPDATE_USER", payload: currentUser })
    }
  }, [])
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default ContextProvider
