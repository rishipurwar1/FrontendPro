import React from 'react'
import { Link } from 'react-router-dom'
import Tag from '../smallComponents/Tag'
import DifficultyBar from './DifficultyBar'
import {Image, Placeholder} from 'cloudinary-react';

const ChallengeCard = ({challenge}) => {
    return (
        <div className="max-w-sm rounded-md shadow-2xl bg-gray-800 mb-4 overflow-hidden">
            <Image cloudName="di5hmgowi" public-id={challenge.image[0]}>
                    <Placeholder type="pixelate" />
            </Image>
            <div>
                <div className="px-6 pt-4 pb-2">
                {challenge.tags.map(tag => (
                    <Tag key={tag} tag={tag} gradient="bg-gradient-to-br from-purple-500 to-indigo-500" />
                ))}
                </div>
                <div className="px-6">
                    <h3 className="font-semibold font-heading text-xl mb-2 text-white">{challenge.title}</h3>
                    <p className="text-base text-gray-400">{challenge.description}</p>
                </div>
                <DifficultyBar />
                <Link to={'/challenge/' + challenge.id} className="block rounded-t-none mt-4 w-full bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-semibold font-heading text-lg text-center px-5 py-4">View Challenge</Link>
            </div>
        </div>
    )
}

export default ChallengeCard