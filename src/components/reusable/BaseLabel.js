import { clsx } from "clsx"

const BaseLabel = ({ id, className, children }) => {
  return (
    <label
      className={clsx("block mb-2 text-sm font-medium text-white", className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default BaseLabel
