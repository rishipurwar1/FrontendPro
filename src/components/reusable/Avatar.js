import React from "react"
import clsx from "clsx"

const Avatar = ({ photoURL, className }) => {
  return (
    <img
      className={clsx(
        "h-10 w-10 p-1 ring-1 ring-indigo-600 rounded-full cursor-pointer",
        className
      )}
      src={photoURL}
      alt="user avatar"
    />
  )
}

export default Avatar
