import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore';
import Hero from '../dashboard/Hero';
import ChallengeCard from './ChallengeCard'

const ChallengesList = () => {
    const { docs } = useFirestore('challenges');
    return (
        <div className="ml-60 px-5">
            <Hero />
            <h2 className="pb-7 text-4xl text-center text-white font-semibold">All Challenges</h2>
            <div className="grid gap-4 grid-cols-3">
            {docs && docs.map(challenge => {
                return (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                )
            })}
            </div>
        </div>
    )
}


export default ChallengesList
