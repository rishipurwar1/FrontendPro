import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { useAuth } from "../../context/AuthContext"

const SignUpButton = ({ color = "bg-gray-800" }) => {
  const { githubSignIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await githubSignIn()
      history.push("/roadmaps")
    } catch {
      console.log("signed in")
    }
    setLoading(false)
  }

  return (
    <button
      disabled={loading}
      onClick={handleSubmit}
      className={`cursor-pointer block w-56 ${color} text-white text-base p-4 font-heading font-semibold shadow-md outline-none rounded-xl`}
    >
      Sign up with GitHub<i className="fab fa-github ml-2"></i>
    </button>
  )
}

export default SignUpButton
