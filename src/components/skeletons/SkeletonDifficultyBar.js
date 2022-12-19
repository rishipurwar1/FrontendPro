import React from "react"

import SkeletonBadge from "../skeletons/SkeletonBadge"

const SkeletonDifficultyBar = () => {
  return (
    <div className="mt-6">
      <SkeletonBadge type="medium" />
      <div className="h-2 mt-2 text-xs flex bg-transparent">
        <div
          style={{ width: "33%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap rounded justify-center bg-gray-700"
        ></div>
        <div
          style={{ width: "33%" }}
          className="shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-gray-700 mx-1"
        ></div>
        <div
          style={{ width: "34%" }}
          className="shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-gray-700"
        ></div>
      </div>
    </div>
  )
}

export default SkeletonDifficultyBar
