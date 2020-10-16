import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import Tag from '../smallComponents/Tag';
import Carousel from './Carousel';

const ChallengeDetails = (props) => {
    const {docs} = useFirestore("challenges");
    const id = props.match.params.id;
    const challengeDetails = docs && docs.filter(doc => doc.id === id);
    
    if(challengeDetails.length > 0) {
        return (
            <div className="ml-64">
                <header className="grid grid-cols-2 items-center justify-items-center">
                    <Carousel images={challengeDetails[0].image} />
                    <div className="mx-2">
                        <h1 className="text-5xl text-blue-900 font-bold">{challengeDetails[0].title}</h1>
                        <div>
                            {challengeDetails[0].tags.map(tag => <Tag tag={tag} />)}
                        </div>
                        <p className="text-xl mt-2 text-blue-900">{challengeDetails[0].description}</p>
                        <button className="bg-secondary text-white font-bold py-3 px-5 rounded text-2xl focus:outline-none mt-3"><i className="animate-bounce fas fa-arrow-down mr-2"></i>Download</button>
                    </div>
                </header>
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
