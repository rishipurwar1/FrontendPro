import React from 'react'

import { Image, Placeholder } from 'cloudinary-react';
import Badge from '../smallComponents/Badge';

const ResourceCard = ({ resource }) => {
    return (
        <div className="flex flex-col max-w-sm rounded-md shadow-3xl bg-gray-800 overflow-hidden">
            <div className="h-auto">
                <Image className="w-full h-full" cloudName="di5hmgowi" alt="challenge design" loading="lazy" public-id={resource.image}>
                    <Placeholder type="pixelate" />
                </Image>
            </div>
            <div className="flex flex-col justify-between border border-gray-400 border-t-0 rounded-bl-md rounded-br-md">
                <div className="px-4 pt-4">
                    {resource.tags.map(tag => (
                        <Badge key={tag} name={tag} badgeColor="purple" />
                    ))}
                </div>
                <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="font-semibold font-heading text-2xl text-white px-4 pb-1 leading-6 cursor-pointer">{resource.title} <span><i className="fas fa-external-link-alt pl-2 text-xs"></i></span></a>
                <p className="text-base text-gray-400 px-4 py-2">{resource.description}</p>
            </div>
        </div>
    )
}

export default ResourceCard
