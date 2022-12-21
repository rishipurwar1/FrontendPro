import React from "react"

import { useSignup } from "../../hooks/useSignup"
import Button from "../reusable/Button"
import Icons from "../SvgIcons/Icons"

const SignedOutLinks = ({ variant = "secondary" }) => {
  const { signup, isPending } = useSignup()

  return (
    <Button
      variant={variant}
      size="large"
      className="font-medium"
      onClick={signup}
      disabled={isPending}
    >
      {isPending ? <Icons.Loader /> : <i className="fab fa-github mr-2"></i>}
      Sign Up with Github
    </Button>
  )
}

export default SignedOutLinks
