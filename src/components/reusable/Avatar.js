import React from "react"
import { twMerge } from "tailwind-merge"

const Avatar = ({ photoURL, className = "ring-indigo-600" }) => {
  return (
    <img
      className={twMerge("h-10 w-10 p-1 ring-1 rounded-full cursor-pointer", className)}
      src={photoURL}
      alt="user avatar"
    />
  )
}

export default Avatar
