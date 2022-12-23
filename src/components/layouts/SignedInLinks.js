import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useLogout } from "../../hooks/useLogout"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import Avatar from "../reusable/Avatar"
import Icons from "../SvgIcons/Icons"

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
        className="block focus:outline-none"
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <Avatar photoURL={profile.photoURL} />
      </button>
      {isOpen && (
        <div
          id="dropdownAvatar"
          className="absolute right-0 top-14 z-10 w-44 rounded-lg divide-y shadow bg-gray-800 divide-gray-700"
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
                className="flex items-center py-2 px-4 hover:bg-gray-700 hover:text-white"
                aria-label="my solutions"
              >
                <Icons.User className="mr-2 -ml-1" size={18} />
                My Solutions
              </Link>
            </li>
            {/* Add more dropdown items here */}
          </ul>
          <div className="py-1">
            <button
              className="flex items-center w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white"
              disabled={loading}
              onClick={signOut}
            >
              <Icons.SignOut className="mr-2 -ml-1" size={18} />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignedInLinks
