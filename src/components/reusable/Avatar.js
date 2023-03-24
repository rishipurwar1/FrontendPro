import Image from "next/image"
import { twMerge } from "tailwind-merge"

const Avatar = ({ photoURL, className = "ring-indigo-600" }) => {
  return (
    <Image
      className={twMerge("rounded-full cursor-pointer", className)}
      width={32}
      height={32}
      src={photoURL}
      alt="user avatar"
    />
  )
}

export default Avatar
