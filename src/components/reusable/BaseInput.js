import { useId } from "react"
import { clsx } from "clsx"

import BaseLabel from "./BaseLabel"

const styles = {
  base: "flex-1 appearance-none border w-full p-2.5 text-sm focus:outline-none",
  state: {
    normal:
      "bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:ring-gray-500 focus:border-gray-500",
    error: "border-red-500 focus:ring-red-500 focus:border-red-500",
    valid: "border-green-600 focus:ring-green-600",
    disabled: "cursor-not-allowed bg-gray-100 shadow-inner text-gray-400",
  },
  rounded: {
    none: null,
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  },
}

const BaseInput = (props) => {
  const {
    label,
    type = "text",
    error = false,
    disabled = false,
    valid = false,
    className = "",
    errorText = "",
    rounded = "lg",
    ...rest
  } = props

  const id = useId()

  return (
    <div className={clsx("relative mb-4", className)}>
      {label && <BaseLabel id={id}>{label}</BaseLabel>}
      <input
        id={id}
        type={type}
        className={clsx([
          styles.base,
          rounded && styles.rounded[rounded],
          error ? styles.state.error : styles.state.normal,
          valid ? styles.state.valid : styles.state.normal,
          disabled && styles.state.disabled,
        ])}
        disabled={disabled}
        {...rest}
      />
      {error && <small className="text-red-500 text-xs">{errorText}</small>}
    </div>
  )
}

export default BaseInput
