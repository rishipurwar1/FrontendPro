import React from "react"
import SkeletonElement from "./SkeletonElement"
import SkeletonBadge from "./SkeletonBadge"

const SkeletonResourceCard = () => {
  return (
    <div className="shadow rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse bg-gray-800">
        <SkeletonElement type="thumbnail" />
        <div className="p-4 pb-0">
          <SkeletonBadge type="small" />
          <SkeletonBadge type="small" />
        </div>
        <div className="space-y-4 px-3 py-1">
          <div className="card-content">
            <SkeletonElement type="title" />
            <SkeletonElement type="text-lg" />
            <SkeletonElement type="text-md" />
          </div>
        </div>
        <div className="block rounded-b-md w-full bg-gradient-to-br bg-gray-400 px-5 py-5">
          &emsp;
        </div>
      </div>
    </div>
  )
}

export default SkeletonResourceCard
