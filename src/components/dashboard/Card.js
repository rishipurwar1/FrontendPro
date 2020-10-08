import React from 'react'

const Card = ({name, info, number,image, color, margin, shadow}) => {
    return (
        <div className={`max-w-xs rounded ${shadow} ${margin}`}>
            <div className="flex items-center justify-between -mt-12 px-5">
                <h3 className={`text-6xl font-bold text-${color}`}>{number}</h3>
                <i className={`text-6xl text-secondary ${image}`}></i>
            </div>
            <div className="p-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{info}</p>
            </div>
        </div>
    )
}

export default Card
