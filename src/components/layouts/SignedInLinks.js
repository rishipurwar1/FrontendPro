import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useLogout } from "../../hooks/useLogout"
import useOnClickOutside from "../../hooks/useOnClickOutside"

const SignedInLinks = ({ profile }) => {
  const { logout } = useLogout()
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  const signOut = async () => {
    try {
      setLoading(true)
      await logout()
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block h-10 w-10 rounded-full focus:outline-none"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="p-1 ring-1 ring-purple-500 rounded-full cursor-pointer"
          src={profile.photoURL}
          alt="user avatar"
        />
      </button>
      {isOpen && (
        <div
          id="dropdownAvatar"
          className="absolute right-0 top-14 z-10 w-44 rounded divide-y shadow bg-gray-800 divide-gray-700"
        >
          <div className="py-3 px-4 text-sm text-white">
            <div>{profile.displayName || profile.reloadUserInfo.screenName}</div>
            <div className="font-medium truncate">{profile.email}</div>
          </div>
          <ul
            className="py-1 text-sm text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li>
              <Link
                to="/mysolutions"
                className="block py-2 px-4 hover:bg-gray-700 hover:text-white"
                aria-label="my solutions"
              >
                <i className="fas fa-user mr-2"></i>My Solutions
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <button
              className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white"
              disabled={loading}
              onClick={signOut}
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignedInLinks
