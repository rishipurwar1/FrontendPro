import React from "react"

// custom auth context
import { useAuth } from "../../context/AuthContext"

// custom components
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import StarButton from "./StarButton"

const Navbar = () => {
  const { currentUser, githubSignOut } = useAuth()
  // const [loading, setLoading] = useState(false)
  const links = currentUser ? (
    <SignedInLinks profile={currentUser.photoURL} githubSignOut={githubSignOut} />
  ) : (
    <SignedOutLinks bgColor="bg-gray-800" />
  )

  return (
    <nav className="p-5 py-8 hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <ul className="flex justify-end space-x-4 items-center">
        <li className="xs:invisible xl:visible">
          <StarButton />
        </li>
        <li>{links}</li>
      </ul>
    </nav>
  )
}

export default Navbar
