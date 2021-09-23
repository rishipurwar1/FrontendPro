import React from "react"
import SkeletonElement from "./SkeletonElement"

const SkeletonCard = () => {
  return (
    <div className="shadow rounded-md max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <SkeletonElement type="thumbnail" />
        <div className="flex-1 space-y-4 px-3 py-1">
          <div className=""></div>
          <div className="space-y-2">
            <SkeletonElement type="text" />
            <SkeletonElement type="subtitle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard