import React from 'react'

const Badge = ({ badgeColor, name, challengeDetails }) => {
    const badgeClass = challengeDetails ? `text-${badgeColor}-300 bg-${badgeColor}-900` : `text-${badgeColor}-200 bg-${badgeColor}-500`;
    return (
        <span class={`text-xs font-semibold inline-block py-1 px-2 mb-3 uppercase rounded-full ${badgeClass} last:mr-0 mr-2`}>{name}</span>
    )
}

export default Badge;
