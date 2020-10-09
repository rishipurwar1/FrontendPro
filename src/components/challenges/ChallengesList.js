import React from 'react'
import ChallengeCard from '../dashboard/ChallengeCard'
import Heading from '../dashboard/Heading'
import { connect } from 'react-redux'

const ChallengesList = ({challenges}) => {
    return (
        <div className="ml-64 pt-12">
            <Heading text="All Challenges" />
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

const mapStateToProps = (state) => {
    return {
      challenges: state.challenge.challenges
    }
}

export default connect(mapStateToProps)(ChallengesList)
