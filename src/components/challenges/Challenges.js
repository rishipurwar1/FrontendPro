import React from 'react'
import useFirestore from '../../hooks/useFirestore';

import Heading from '../dashboard/Heading'
import ChallengeCard from './ChallengeCard'

const Challenges = () => {
    const { docs } = useFirestore('challenges');
    return (
        <div className="ml-64 pt-12">
            <Heading text="Latest Challenges" />
            <div className="grid gap-4 ml-4 grid-cols-3">
            {docs && docs.map(challenge => {
                return (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                )
            })}
            </div>
        </div>
    )
}

export default Challenges
