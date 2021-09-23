import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Button from "../smallComponents/Button"

const SignedOutLinks = ({ bgColor }) => {
  const { githubSignIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async () => {
    try {
      setLoading(true)
      await githubSignIn()
      // history.push("/");
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Button
      bgColor={bgColor}
      handleClick={handleSubmit}
      disabled={loading}
      name="Sign Up with Github"
      logo="fab fa-github ml-2"
    />
  )
}

export default SignedOutLinks
