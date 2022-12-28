import { clsx } from "clsx"

import BaseLabel from "./BaseLabel"

const styles = {
  base: "flex-1 appearance-none w-full p-2.5 text-sm focus:outline-none",
  state: {
    normal:
      "bg-gray-700 border border-gray-600 placeholder-gray-400 text-white  focus:ring-gray-500 focus:border-gray-500",
    borderLess: "bg-gray-700 placeholder-gray-400 text-white",
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
    borderLess = false,
    className = "",
    rounded = "lg",
    name,
    innerRef,
    ...rest
  } = props

  return (
    <div className={clsx("relative mb-4", className)}>
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
        className={clsx([
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
