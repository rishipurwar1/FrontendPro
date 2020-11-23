import React from 'react'

const Card = ({name, info, image, gradient, color}) => {
    return (
        <div className={`${gradient} rounded-xl shadow-2xl text-center p-5`}>
            <i class={`${image} fa-5x ${color}`}></i>
            <h4 className="py-3 text-xl text-white font-semibold font-heading">{name}</h4>
            <p className="text-white">{info}</p>
        </div>
    )
}

export default Card
