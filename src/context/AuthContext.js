import { createContext, useEffect, useReducer } from "react"
import { onAuthStateChanged } from "firebase/auth"

import { auth } from "../firebase/config"
import { authReducer } from "../reducers/authReducer"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user })
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
  )
}
