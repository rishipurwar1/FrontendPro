import React from "react"

import { useSignup } from "../../hooks/useSignup"
import Button from "../reusable/Button"

const SignedOutLinks = ({ bgColor }) => {
  const { signup } = useSignup()

  return (
    <Button
      bgColor={bgColor}
      handleClick={signup}
      name="Sign Up with Github"
      logo="fab fa-github ml-2"
    />
  )
}

export default SignedOutLinks
