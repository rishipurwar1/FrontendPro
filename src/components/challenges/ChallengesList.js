import React from 'react'

import useFirestore from '../../hooks/useFirestore';
import ChallengeCard from './ChallengeCard'
import Heading from '../dashboard/Heading'

const ChallengesList = () => {
    const { docs } = useFirestore('challenges');

    return (
        <div className="ml-64 pt-12">
            <Heading text="All Challenges" />
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


export default ChallengesList
