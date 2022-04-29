import React from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import Button from "../reusable/Button"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
  const { user } = useAuthContext()
  const links = user ? (
    <SignedInLinks profile={user.photoURL} />
  ) : (
    <SignedOutLinks bgColor="bg-gray-800" />
  )

  const handleClick = () => {
    window.open(
      "https://github.com/rishipurwar1/coding-space",
      "_blank",
      "noopener",
      "noreferrer"
    )
  }
  const starButton = (
    <Button
      bgColor={
        "bg-purple-800 transition-all  duration-200 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500"
      }
      handleClick={handleClick}
      disabled={false}
      name="Star us on Github"
      logo="far fa-star ml-2"
    />
  )
  return (
    <nav className="p-5 py-8 hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <ul className="flex justify-end space-x-4 items-center">
        <li className="xs:invisible xl:visible">{starButton}</li>
        <li>{links}</li>
      </ul>
    </nav>
  )
}

export default Navbar
