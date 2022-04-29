import { useState } from "react"
import { GithubAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "../firebase/config"
import { createUserProfileDocument } from "../firebase/createUserProfileDocument"

import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
  const [error, setError] = useState(false)
  const provider = new GithubAuthProvider()
  const { dispatch } = useAuthContext()

  const signup = async () => {
    setError(null)
    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      await createUserProfileDocument(user)
      dispatch({ type: "LOGIN", payload: user })
    } catch (error) {
      const errorMessage = error.message
      console.log(errorMessage)
    }
  }
  return { error, signup }
}
