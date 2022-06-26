import React from "react"

import Badge from "../reusable/Badge"

const DifficultyBar = ({ difficultyLevel }) => {
  let middleColor = "bg-gray-500"
  let lastColor = "bg-gray-500"
  let badgeColor = "text-green-200 bg-green-500"
  if (difficultyLevel === "Intermediate") {
    middleColor = "bg-orange-500"
    badgeColor = "text-orange-200 bg-orange-500"
  } else if (difficultyLevel === "Hard") {
    middleColor = "bg-orange-500"
    lastColor = "bg-red-500"
    badgeColor = "text-red-200 bg-red-500"
  }
  return (
    <div className="relative mx-4">
      <Badge badgeColor={badgeColor} name={difficultyLevel} />
      <div className="overflow-hidden h-2 mb-4 text-xs flex bg-transparent">
        <div
          style={{ width: "33%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap rounded justify-center bg-green-500"
        ></div>
        <div
          style={{ width: "33%" }}
          className={`shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center ${middleColor} mx-1`}
        ></div>
        <div
          style={{ width: "34%" }}
          className={`shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center ${lastColor}`}
        ></div>
      </div>
    </div>
  )
}

export default DifficultyBar
