import React from 'react'

const SkeletonElement = ({ type }) => {
    let tailwindClass = '';
    switch (type) {
        case 'text':
            tailwindClass = 'h-4 my-2 bg-gray-400 rounded';
            break;
        case 'subtitle':
            tailwindClass = 'h-4 my-2 bg-gray-400 rounded w-5/6';
            break;
        case 'title':
            tailwindClass = 'h-4 my-2 bg-gray-400 rounded w-3/4';
            break;
        case 'avatar':
            tailwindClass = 'w-12 h-12 rounded-full';
            break;
        case 'thumbnail':
            tailwindClass = 'max-w-sm h-60';
            break;
        default:
        // code block
    }
    const classes = `bg-gray-400 rounded ${tailwindClass}`
    return (
        <div className={classes}></div>
    )
}

export default SkeletonElement
