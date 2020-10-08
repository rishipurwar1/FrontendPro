import React from 'react'
import { Link } from 'react-router-dom'

const ChallengeCard = ({name, about, image, tags}) => {
    return (
        <div className="max-w-xs rounded shadow-2xl mb-4 overflow-hidden">
            <img className="" src={image} alt="" />
            <div>
                <div className="px-6 pt-4 pb-2">
                {tags.map(tag => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                ))}
                </div>
                <div className="px-6">
                    <h3 className="font-bold text-xl mb-2">{name}</h3>
                    <p className="text-gray-700 text-base">{about}</p>
                </div>
                <Link to="#" className="block rounded-t-none mt-5 w-full bg-secondary text-white text-lg text-center px-5 py-4">View Challenge</Link>
            </div>
        </div>
    )
}

export default ChallengeCard