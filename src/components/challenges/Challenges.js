import React from 'react'
import useFirestore from '../../hooks/useFirestore';

import ChallengeCard from './ChallengeCard'

const Challenges = () => {
    const { docs } = useFirestore('challenges');
    return (
        <div className="pt-12">
            <h2 className="text-4xl text-center text-white font-semibold">Latest Challenges</h2>
            <div className="grid gap-5 grid-cols-3 mt-8">
                {docs && docs.map(challenge => {
                    return (
                        <ChallengeCard key={challenge.id} challenge={challenge} challengelist btnTitle="View Challenge" />
                    )
                })}
            </div>
        </div>
    )
}

export default Challenges
