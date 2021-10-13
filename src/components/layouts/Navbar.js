import React from "react"

// custom auth context
import { useAuth } from "../../context/AuthContext"
import Button from "../smallComponents/Button"

// custom components
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
  const { currentUser, githubSignOut } = useAuth()
  // const [loading, setLoading] = useState(false)
  const links = currentUser ? (
    <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut} />
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
