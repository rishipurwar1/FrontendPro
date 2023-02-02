import { twMerge } from "tailwind-merge"

import BaseLabel from "./BaseLabel"

const styles = {
  base: "flex-1 appearance-none w-full p-2.5 text-sm focus:outline-none",
  state: {
    normal:
      "bg-gray-700 border border-gray-600 placeholder-gray-400 text-white  focus:ring-gray-500 focus:border-gray-500",
    borderLess: "bg-gray-700 placeholder-gray-400 text-white",
    disabled:
      "cursor-not-allowed bg-gray-700 border border-gray-600 placeholder-gray-400 text-gray-500",
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
    borderLess = false,
    className = "",
    rounded = "lg",
    name,
    innerRef,
    ...rest
  } = props

  return (
    <div className={twMerge("relative mb-4", className)}>
      {label && (
        <BaseLabel id={name}>
          {label} {required && <span aria-label="required">*</span>}
        </BaseLabel>
      )}
      <input
        id={name}
        type={type}
        defaultValue={value}
        required={required}
        className={twMerge([
          styles.base,
          rounded && styles.rounded[rounded],
          borderLess ? styles.state.borderLess : styles.state.normal,
          disabled && styles.state.disabled,
        ])}
        disabled={disabled}
        ref={innerRef}
        {...rest}
      />
    </div>
  )
}

export default BaseInput
