import { useEffect, useState } from "react"
import { GithubAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "../firebase/config"
import { createUserProfileDocument } from "../firebase/createUserProfileDocument"

import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const provider = new GithubAuthProvider()
  const { dispatch } = useAuthContext()

  const signup = async () => {
    setError(null)
    setIsPending(true)
    try {
      const res = await signInWithPopup(auth, provider)
      if (!res) {
        throw new Error("Could not complete signup")
      }
      const user = res.user
      await createUserProfileDocument(user)
      dispatch({ type: "LOGIN", payload: user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  return { signup, error, isPending }
}
