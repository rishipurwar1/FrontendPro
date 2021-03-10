import React from 'react'

const Heading = ({text, margin}) => {
    return (
        <h2 className={`pb-2 text-4xl text-center text-white font-semibold ${margin}`}>{text}</h2>
    )
}

export default Heading
