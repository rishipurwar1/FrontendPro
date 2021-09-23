import React, { useState, useContext, createContext, useEffect } from "react"
import { auth, createUserProfileDocument } from "../config/fbConfig"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const provider = new auth.GithubAuthProvider()
  const githubSignIn = () => {
    return auth().signInWithRedirect(provider)
  }

  const githubSignOut = () => {
    return auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (userAuth) => {
      // setCurrentUser(user);
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth)
        useRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    githubSignIn,
    githubSignOut,
  }

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}
