import React from "react"

import SkeletonBadge from "../skeletons/SkeletonBadge"

const SkeletonDifficultyBar = ({ difficultyLevel }) => {
  return (
    <div className="relative mx-4">
      <SkeletonBadge type="medium" />
      <div className="overflow-hidden h-2 mb-4 text-xs flex bg-transparent">
        <div
          style={{ width: "33%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap rounded justify-center bg-gray-400"
        ></div>
        <div
          style={{ width: "33%" }}
          className="shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-gray-400 mx-1"
        ></div>
        <div
          style={{ width: "34%" }}
          className="shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-gray-400"
        ></div>
      </div>
    </div>
  )
}

export default SkeletonDifficultyBar
