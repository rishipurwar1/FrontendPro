import React from 'react'
import { Link } from 'react-router-dom'
import DifficultyBar from './DifficultyBar'
import { Image, Placeholder } from 'cloudinary-react';
import Badge from '../smallComponents/Badge';

const ChallengeCard = ({ challenge, challengelist, btnTitle }) => {
    const link = challengelist ? '/challenge/' + challenge.id : '/submit/' + challenge.id;
    return (
        <div className="bg-gray-800 shadow-2xl overflow-hidden rounded-md max-w-sm">
            <Image cloudName="di5hmgowi" alt="challenge design" loading="lazy" public-id={challenge.images.cover}>
                <Placeholder type="pixelate" />
            </Image>
            <div className="p-4 pb-2">
                {challenge.tags.map(tag => (
                    <Badge key={tag} name={tag} badgeColor="purple" />
                ))}
            </div>
            <div className="mb-4 card-content">
                <h3 className="font-semibold font-heading text-2xl text-white px-4 leading-6">{challenge.title}</h3>
                <p className="text-base text-gray-400 px-4 py-4">{challenge.description}</p>
            </div>
            <DifficultyBar difficultyLevel={challenge.difficulty} />
            <Link to={link} className="block rounded-t-none mt-4 w-full bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-semibold font-heading text-lg text-center px-5 py-5">{btnTitle}</Link>
        </div>
    )
}

export default ChallengeCard