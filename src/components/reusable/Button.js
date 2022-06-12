import React from "react"

const Button = ({ handleClick, bgColor, disabled, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`cursor-pointer inline-flex items-center p-4 ${bgColor} text-white text-base font-heading font-semibold shadow-md rounded-xl focus:outline-none`}
    >
      {children}
    </button>
  )
}

export default Button
