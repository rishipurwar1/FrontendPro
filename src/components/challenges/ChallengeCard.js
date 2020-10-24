import React from 'react'
import { Link } from 'react-router-dom'
import Tag from '../smallComponents/Tag'
import DifficultyBar from './DifficultyBar'
import {Image, Placeholder} from 'cloudinary-react';

const ChallengeCard = ({challenge}) => {
    return (
        <div className="max-w-xs rounded shadow-2xl mb-4 overflow-hidden">
            <Image cloudName="di5hmgowi" public-id={challenge.image[0]}>
                    <Placeholder type="pixelate" />
            </Image>
            <div>
                <div className="px-6 pt-4 pb-2">
                {challenge.tags.map(tag => (
                    <Tag key={tag} tag={tag} />
                ))}
                </div>
                <div className="px-6">
                    <h3 className="font-bold text-xl mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 text-base">{challenge.description}</p>
                </div>
                <DifficultyBar />
                <Link to={'/challenge/' + challenge.id} className="block rounded-t-none mt-4 w-full bg-secondary text-white text-lg text-center px-5 py-4">View Challenge</Link>
            </div>
        </div>
    )
}

export default ChallengeCard