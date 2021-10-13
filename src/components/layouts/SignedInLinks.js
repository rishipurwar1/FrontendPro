import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

const SignedInLinks = ({ profile, githubSignOut }) => {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const logout = () => {
    try {
      setLoading(true)
      githubSignOut()
      history.push("/solutions")
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }
  return (
    <div className="relative block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block h-10 w-10 rounded-full overflow-hidden border-2 border-purple-500 focus:outline-none"
      >
        <img
          className=" h-full w-full object-cover cursor-pointer"
          src={profile}
          alt="user profile"
        />
      </button>
      {isOpen && (
        <ul
          className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-300 bg-gray-800 rounded-md shadow-md"
          aria-label="sub-menu"
        >
          <li className="rounded transition-all bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500">
            <Link
              to="/mysolutions"
              className="block px-4 py-1 "
              aria-label="my solutions"
              title="this is a link to my solutions page"
            >
              <i className="fas fa-user mr-2"></i>My Solutions
            </Link>
          </li>
          <li className="rounded transition-all bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500">
            <button disabled={loading} onClick={logout} className="block px-4 py-1">
              <i className="fas fa-sign-out-alt mr-2"></i>Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default SignedInLinks
