import { useId } from "react"
import { clsx } from "clsx"

import BaseLabel from "./BaseLabel"

const styles = {
  base: "flex-1 appearance-none border w-full p-2.5 text-sm focus:outline-none",
  state: {
    normal:
      "bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:ring-gray-500 focus:border-gray-500",
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
    value = "",
    required = false,
    disabled = false,
    className = "",
    rounded = "lg",
    ...rest
  } = props

  const id = useId()

  return (
    <div className={clsx("relative mb-4", className)}>
      {label && (
        <BaseLabel id={id}>
          {label} {required && <span aria-label="required">*</span>}
        </BaseLabel>
      )}
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        className={clsx([
          styles.base,
          rounded && styles.rounded[rounded],
          disabled ? styles.state.disabled : styles.state.normal,
        ])}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

export default BaseInput
