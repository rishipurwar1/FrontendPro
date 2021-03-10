import React from 'react'

// custom components
// import hero from '../../assets/illustrations/main.svg'
import DownloadButton from '../smallComponents/DownloadButton';
// import Tag from '../smallComponents/Tag';
import { useAuth } from '../../context/AuthContext'
import { Image, Placeholder } from 'cloudinary-react';
import Badge from '../smallComponents/Badge';

const ChallengeHeader = ({ docs }) => {
    const { currentUser } = useAuth();
    const displayName = currentUser ? currentUser.displayName.split(' ')[0] : 'Coder';
    return docs.length ?
        (
            <div className="mt-2 mb-8">
                <h2 className="font-heading text-3xl font-bold text-white">Hello {displayName} <span role="img" aria-label="Hello">👋</span>,</h2>
                <p className="font-heading text-lg font-normal text-white">Today is a great day to start this challenge <span role="img" aria-label="welcome">😊</span></p>
                <header className="mt-4 flex bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl h-72 items-center justify-between shadow-2xl">
                    <div className="w-1/3 p-5 pl-6">
                        <h2 className="leading-snug text-3xl text-white font-bold">{docs[0].title}</h2>
                        <div className="py-2">
                            {docs[0].tags.map(tag => <Badge key={tag} name={tag} badgeColor="gray" challengeDetails />)}
                        </div>
                        <p className="text-base pb-2 text-gray-200">{docs[0].description}</p>
                        <DownloadButton color="bg-gray-900" />
                    </div>
                    <div className="w-96 p-5 px-6">
                        <Image className="rounded-3xl" cloudName="di5hmgowi" public-id={docs[0].image[0]}>
                            <Placeholder type="pixelate" />
                        </Image>
                    </div>
                </header>
            </div>
        ) : null;
}

export default ChallengeHeader
