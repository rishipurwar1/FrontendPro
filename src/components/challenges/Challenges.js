import React from 'react'
import useFirestore from '../../hooks/useFirestore';

import ChallengeCard from './ChallengeCard'

const Challenges = () => {
    const { docs } = useFirestore('challenges');
    return (
        <main className="mt-16">
            <h2 className="text-5xl text-center text-white font-bold font-heading">Latest Challenges</h2>
            {docs && <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
                {docs.map(challenge => {
                    return (
                        <ChallengeCard key={challenge.id} challenge={challenge} challengelist btnTitle="View Challenge" />
                    )
                })}
            </div>}
        </main>
    )
}

export default Challenges
