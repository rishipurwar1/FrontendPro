import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import DownloadButton from '../smallComponents/DownloadButton';
import Tag from '../smallComponents/Tag';
import Carousel from './Carousel';


const ChallengeDetails = (props) => {
    const id = props.match.params.id;
    const { docs } = useFirestore("challenges", id);
    console.log(docs);

    if(docs.length === 0) return <p className="ml-64">Loading project...</p>  
    return (
        <div className="ml-64">
            <main className="grid grid-cols-2 items-center justify-items-center">
                <Carousel images={docs[0].image} />
                <div className="mx-2">
                    <h1 className="leading-snug text-5xl text-blue-900 font-bold">{docs[0].title}</h1>
                    <div>
                        {docs[0].tags.map(tag => <Tag key={tag} tag={tag} />)}
                    </div>
                    <p className="text-lg mt-2 text-blue-900">{docs[0].description}</p>
                    <DownloadButton />
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
}

export default ChallengeDetails
