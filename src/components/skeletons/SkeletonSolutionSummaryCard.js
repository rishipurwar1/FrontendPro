import React from "react"
import SkeletonElement from "./SkeletonElement"

const SkeletonSolutionSummaryCard = () => {
  return (
    <div className="shadow rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col bg-gray-800">
        <SkeletonElement type="thumbnail" />

        <div className="solution-card flex flex-col justify-between">
          <div className="px-6 py-3">
            <SkeletonElement type="subtitle" />
          </div>
          <div>
            <div className="flex items-center px-6 pb-3">
              <SkeletonElement type="avatar" />
              <div className="flex flex-col pl-1 flex-grow">
                <SkeletonElement type="userInfo" />
                <SkeletonElement type="userInfo" />
              </div>
            </div>
            <div className="block rounded-b-md w-full bg-gradient-to-br bg-gray-400 px-5 py-5">
              &emsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonSolutionSummaryCard
