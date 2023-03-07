import Icons from "../SvgIcons/Icons"

import SkeletonBadge from "./SkeletonBadge"
import SkeletonDifficultyBar from "./SkeletonDifficultyBar"
import SkeletonElement from "./SkeletonElement"

const SkeletonCard = ({ isSolution, isChallenge }) => {
  return (
    <div role="status" className="animate-pulse bg-gray-800 p-4 rounded-lg w-[376px]">
      <div className="flex justify-center items-center w-full h-64 rounded-lg bg-gray-700 mb-4">
        <Icons.PlaceholderThumbnail />
      </div>
      <SkeletonBadge />
      <div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text-lg" />
        <SkeletonElement type="text-md" />
        <SkeletonElement type="text" />
      </div>
      {isChallenge && !isSolution && <SkeletonDifficultyBar />}
      {!isChallenge && isSolution && (
        <div className="flex items-center space-x-4 mt-4">
          <Icons.PlaceholderAvatar />
          <div>
            <SkeletonElement type="userInfo" />
            <SkeletonElement type="text-lg" />
          </div>
        </div>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SkeletonCard
