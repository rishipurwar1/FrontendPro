import { twMerge } from "tailwind-merge"

const BaseLabel = ({ id, className, children }) => {
  return (
    <label
      className={twMerge("block mb-2 text-sm font-medium text-white", className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default BaseLabel
