import React, { useState } from 'react'
import useFirestore from '../../hooks/useFirestore'
import DownloadButton from '../smallComponents/DownloadButton';
// import DownloadButton from '../smallComponents/DownloadButton';
import DropDown from '../smallComponents/DropDown';
import ChallengeHeader from './ChallengeHeader';

const ChallengeDetails = (props) => {
    const id = props.match.params.id;
    const { docs } = useFirestore("challenges", id);
    const figmaURLs = ['https://www.figma.com/file/8VcQNbVQuqp4k70YqNQQjc/github-jobs-api', 'https://www.figma.com/file/8VcQNbVQuqp4k70YqNQQjc/github-jobs-api?node-id=102%3A4'];
    const [figmaURL, setFigmaURL] = useState(0);
    if (docs.length === 0) return <p className="text-white text-center">Loading project...</p>
    return (
        <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
            <ChallengeHeader docs={docs} />
            <div className="overflow-hidden relative">
                <iframe className="iframe-embed border-gray-50 w-full -mb-12" src={'https://www.figma.com/embed?embed_host=share&url=' + figmaURLs[figmaURL]} title={`screen-${figmaURL}`} allowFullScreen></iframe>
                <DropDown setFigmaURL={(index) => setFigmaURL(index)} />
            </div>
            <div className="flex xs:flex-wrap sm:flex-nowrap pt-4">
                <div className="text-white">
                    <h2 className="text-2xl font-semibold pb-1 text-purple-500">About the challenge</h2>
                    <p className="text-gray-300">Your challenge is to build a random quote generator that can display random quotes by using a quote API</p>
                    <h3 className="text-gray-300 pt-2">User can able to:</h3>
                    <ul className="text-gray-300 list-disc pl-5">
                        <li>see the random quote</li>
                        <li>see the random quote</li>
                        <li>see the random quote</li>
                        <li>see the random quote</li>
                        <li>see the random quote</li>
                        <li>see the random quote</li>
                    </ul>
                </div>
                <div className="text-white xs:mt-4 sm:mt-0 sm:pl-6">
                    <h2 className="text-2xl font-semibold pb-1 text-purple-500">What you'll learn?</h2>
                    <p className="text-gray-300 pb-2">You will learn about How to use css grid and DOM manupulation. So what are you waiting for?<br />Click on the download button to get started.</p>
                    <DownloadButton color="bg-gradient-to-br from-purple-500 to-indigo-500" />
                </div>
            </div>
        </div >
    )
}

export default ChallengeDetails
