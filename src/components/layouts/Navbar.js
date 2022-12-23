import React from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import ButtonExternalLink from "../reusable/ButtonExternalLink"
import Icons from "../SvgIcons/Icons"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
  const { user } = useAuthContext()
  const links = user ? (
    <SignedInLinks profile={user} />
  ) : (
    <SignedOutLinks variant="primary" />
  )

  return (
    <nav className="p-5 py-8 hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <ul className="flex justify-end space-x-4 items-center">
        <li className="xs:invisible xl:visible group">
          <ButtonExternalLink
            href="https://github.com/rishipurwar1/coding-space"
            size="large"
            variant="primary"
            className="font-medium"
          >
            <Icons.Star size={18} className="mr-2 -ml-1 group-hover:fill-current" />
            Star us on GitHub
          </ButtonExternalLink>
        </li>
        <li>{links}</li>
      </ul>
    </nav>
  )
}

export default Navbar
