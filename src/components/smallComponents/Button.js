import React from "react"

const Button = ({ handleClick, bgColor, disabled, name, logo }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={` block w-10000 ${bgColor} text-gray-300
      hover:shadow-2xl hover:translate-x hover:text-white
      text-white text-base p-4 font-heading font-semibold shadow-md rounded-xl focus:outline-none`}
    >
      {name}
      {logo ? <i className={logo}></i> : null}
    </button>
  )
}

export default Button
