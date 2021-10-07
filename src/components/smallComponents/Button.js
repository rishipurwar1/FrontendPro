import React from "react"

const Button = ({ handleClick, bgColor, disabled, name, logo }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`cursor-pointer block w-56 ${bgColor} text-white text-base p-4 font-heading font-semibold shadow-md rounded-xl focus:outline-none hover:animate-pulse`}
    >
      {name}
      {logo ? <i className={`${logo} ml-1`}></i> : null}
    </button>
  )
}

export default Button
