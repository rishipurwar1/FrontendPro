import React from 'react'

// custom components
import DownloadButton from '../smallComponents/DownloadButton';
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import { Image, Placeholder, Transformation } from 'cloudinary-react';
import Badge from '../smallComponents/Badge';
import Button from '../smallComponents/Button';

const ChallengeHeader = ({ docs, button }) => {
    const { currentUser } = useAuth();
    const displayName = currentUser ? currentUser.displayName.split(' ')[0] : 'Coder';
    const history = useHistory();
    const solutionDetails = docs.map(({ id, ...r }) => r);
    return docs.length ?
        (
            <div className="mt-2 mb-8">
                <h2 className="font-heading text-3xl font-bold text-white">Hello {displayName} <span role="img" aria-label="Hello">👋</span>,</h2>
                <p className="font-heading text-lg font-normal text-white">Today is a great day to start this challenge <span role="img" aria-label="welcome">😊</span></p>
                <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-md xs:px-5 md:px-8 py-4 xs:h-full sm:max-h-96 xs:flex-wrap-reverse sm:flex-nowrap">
                    <div className="xs:w-full sm:w-1/2">
                        <h2 className="leading-snug xs:text-3xl lg:text-5xl text-white font-semibold font-heading pb-2">{docs[0].title}</h2>
                        <div className="py-2">
                            {docs[0].tags.map(tag => <Badge key={tag} name={tag} badgeColor="gray" challengeDetails />)}
                        </div>
                        <p className="text-base mb-4 xs:w-full sm:w-4/5 lg:w-3/5 text-gray-200">{docs[0].description}</p>
                        {button ? <Button
                            name="Explore Solutions "
                            logo="fas fa-arrow-right"
                            bgColor="bg-gray-900"
                            handleClick={() => history.push('/solutions')}
                        /> : <DownloadButton
                            challengeDetails={solutionDetails} color="bg-gray-900"
                        />}
                    </div>
                    <div className="">
                        <Image className="rounded-xl xs:h-auto xs:w-full sm:w-auto sm:h-64 md:h-72 lg:h-80 xs:mb-4 sm:mb-0" alt={`${docs[0].title} Challenge`} cloudName="di5hmgowi" public-id={docs[0].images.cover}>
                            <Placeholder type="pixelate" />
                            <Transformation crop="fill" />
                        </Image>
                    </div>
                </header>
            </div>
        ) : <h1 className="ml-56 text-white">Loading...</h1>;
}

export default ChallengeHeader
