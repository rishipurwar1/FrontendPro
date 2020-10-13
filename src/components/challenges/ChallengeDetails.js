import React from 'react'
import useFirestore from '../../hooks/useFirestore'

const ChallengeDetails = (props) => {
    const {docs} = useFirestore("challenges");
    const id = props.match.params.id;
    const challengeDetails = docs && docs.filter(doc => doc.id === id);
    if(challengeDetails.length > 0) {
        return (
            <div className="ml-64">
                <h1>{challengeDetails[0].title}</h1>
                <p>{challengeDetails[0].description}</p>
                <img src={challengeDetails[0].image} alt=""/>
                {challengeDetails[0].tags.map(tag => <span key={tag}>{tag}</span>)}
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
