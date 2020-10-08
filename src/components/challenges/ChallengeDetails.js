import React from 'react'

const ChallengeDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="ml-64">
            <h1>Challenge Details {id}</h1>
        </div>
    )
}

export default ChallengeDetails
