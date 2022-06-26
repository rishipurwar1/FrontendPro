import React from "react"

const Badge = ({ badgeColor, name, challengeDetails, padding = "py-2 px-3" }) => {
  return (
    <span
      className={`text-xs font-semibold inline-block ${padding} mb-3 uppercase rounded-full ${badgeColor} last:mr-0 mr-2`}
    >
      {name}
    </span>
  )
}

export default Badge
