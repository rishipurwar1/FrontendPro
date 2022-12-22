import React from "react"

import { useSignup } from "../../hooks/useSignup"
import Button from "../reusable/Button"
import BrandIcons from "../SvgIcons/BrandIcons"

const SignedOutLinks = ({ variant = "secondary" }) => {
  const { signup, isPending } = useSignup()

  return (
    <Button
      variant={variant}
      size="large"
      className="font-medium group"
      onClick={signup}
      loading={isPending}
    >
      {!isPending && (
        <BrandIcons.GitHub size={18} className="mr-2 -ml-1 group-hover:fill-current" />
      )}
      Sign Up with GitHub
    </Button>
  )
}

export default SignedOutLinks
