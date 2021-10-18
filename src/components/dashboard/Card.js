import React from "react"

const Card = ({ name, info, image, gradient, color, lastClass }) => {
  return (
    <div
      className={`${gradient} rounded-xl shadow-2xl text-center px-5 py-8 max-w-sm h-96 opacity-80
      hover:shadow-2xl hover:opacity-100 
      ${lastClass ? "sm:last:col-span-2 lg:last:col-span-1" : ""}`}
    >
      <i className={`${image} text-8xl ${color} pb-3`}></i>
      <p className="py-3 text-2xl text-white font-bold font-heading">{name}</p>
      <p className="text-gray-100 text-lg font-medium">{info}</p>
    </div>
  )
}

export default Card
