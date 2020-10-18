import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import Tag from '../smallComponents/Tag';
import Carousel from './Carousel';
import { Link } from 'react-router-dom'

const ChallengeDetails = (props) => {
    const {docs} = useFirestore("challenges");
    const id = props.match.params.id;
    const challengeDetails = docs && docs.filter(doc => doc.id === id);
    
    if(challengeDetails.length > 0) {
        return (
            <div className="ml-64">
                <main className="grid grid-cols-2 items-center justify-items-center">
                    <Carousel images={challengeDetails[0].image} />
                    <div className="mx-2">
                        <h1 className="leading-snug text-5xl text-blue-900 font-bold">{challengeDetails[0].title}</h1>
                        <div>
                            {challengeDetails[0].tags.map(tag => <Tag key={tag} tag={tag} />)}
                        </div>
                        <p className="text-lg mt-2 text-blue-900">{challengeDetails[0].description}</p>
                            <a className="bg-secondary text-white font-bold py-3 px-5 rounded text-2xl focus:outline-none mt-3 block w-48" href="https://res.cloudinary.com/di5hmgowi/raw/upload/v1602933977/images/sample_zmazlz.rar" type="_self" rel="noopener noreferrer" download ><i className="animate-bounce fas fa-arrow-down mr-2"></i>Download</a>
                    </div>
                </main>
                <section className="pl-3 mt-12 mb-2 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl text-blue-900 font-semibold">About Challenge</h2>
                        <p className="text-blue-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo iste recusandae magnam quibusdam unde consequatur culpa, eaque dicta mollitia.</p>
                        <h3 className="text-xl text-blue-900 mt-2">User should be able to:</h3>
                        <ul className="list-disc ml-4 text-blue-900">
                            <li>View the website in both desktop and mobile version.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-blue-900 font-semibold">Getting Started Guide</h2>
                        <ul className="list-disc ml-4 text-blue-900">
                            <li>Download the challenge</li>
                            <li>Open the starter code in your /n favourite code editor</li>
                            <li>Start Coding It!</li>
                            <li>Share your success with the world</li>
                        </ul>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia voluptatem laudantium sed culpa natus.
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <div className="ml-64">
              <p>Loading project...</p>
            </div>
        )
    }
}

export default ChallengeDetails
