import React from 'react'

const Tag = ({tag}) => {
    return (
        <span className="inline-block bg-gray-200 shadow-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tag}>{tag}</span>
    )
}

export default Tag
