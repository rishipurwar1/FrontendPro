import React from 'react'

const Card = ({ name, info, image, gradient, color, lastClass }) => {
    return (
        <div className={`${gradient} rounded-xl shadow-2xl text-center px-5 py-8 sm:max-w-sm lg:max-w-xs h-96 ${lastClass ? 'sm:last:col-span-2 lg:last:col-span-1' : ''}`}>
            <i className={`${image} text-8xl ${color} pb-3`}></i>
            <p className="py-3 text-2xl text-white font-bold font-heading">{name}</p>
            <p className="text-gray-100 text-lg font-medium">{info}</p>
        </div>
    )
}

export default Card
