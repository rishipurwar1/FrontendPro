import React from 'react'

import ChallengeCard from './ChallengeCard'
import Heading from './Heading'

const Challenges = ({challenges}) => {
    return (
        <div className="ml-64 pt-12">
            <Heading text="Latest Challenges" />
            <div className="grid gap-4 ml-4 grid-cols-3">
            {challenges && challenges.map(challenge => {
                return (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                )
            })}
            </div>
        </div>
    )
}

export default Challenges
