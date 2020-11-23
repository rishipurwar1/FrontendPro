import React from 'react'

const Tag = ({tag, gradient}) => {
    return (
        <span className={`inline-block ${gradient} shadow-sm rounded-full px-3 py-1 text-sm font-semibold text-purple-200 mr-2 mb-2`} key={tag}>{tag}</span>
    )
}

export default Tag
