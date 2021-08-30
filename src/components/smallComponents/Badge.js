import React from 'react'

const Badge = ({ badgeColor, name, challengeDetails, padding = "py-2 px-3" }) => {
    const badgeClass = challengeDetails ? `text-${badgeColor}-300 bg-${badgeColor}-900` : `text-${badgeColor}-100 bg-${badgeColor}-500`;
    return (
        <span className={`text-xs font-semibold inline-block ${padding} mb-3 uppercase rounded-full ${badgeClass} last:mr-0 mr-2`}>{name}</span>
    )
}

export default Badge;
