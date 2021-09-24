import React from "react"
import SkeletonElement from "./SkeletonElement"
import SkeletonBadge from "../skeletons/SkeletonBadge"
import SkeletonDifficultyBar from "../skeletons/SkeletonDifficultyBar"

const SkeletonChallengeCard = () => {
  return (
    <div className="shadow rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse bg-gray-800">
        <SkeletonElement type="thumbnail" />
        <div className="p-4 pb-0">
          <SkeletonBadge type="small" />
          <SkeletonBadge type="small" />
        </div>
        <div className="space-y-4 px-3 py-1">
          <div className="card-content space-y-2 mb-4">
            <SkeletonElement type="title" />
            <SkeletonElement type="text-lg" />
            <SkeletonElement type="text-md" />
            <SkeletonElement type="text" />
          </div>
        </div>
        <SkeletonDifficultyBar />
        <div className="block mt-4 rounded-b-md w-full bg-gradient-to-br bg-gray-400 px-5 py-5">
          &emsp;
        </div>
      </div>
    </div>
  )
}

export default SkeletonChallengeCard
