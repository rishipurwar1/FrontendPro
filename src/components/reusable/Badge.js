import React from "react"

const Badge = ({ badgeColor, name, challengeDetails }) => {
  return (
    <span
      className={`text-xs font-medium uppercase inline-flex items-center px-2.5 py-0.5 rounded ${badgeColor} last:mr-0 mr-2`}
    >
      {name}
    </span>
  )
}

export default Badge
