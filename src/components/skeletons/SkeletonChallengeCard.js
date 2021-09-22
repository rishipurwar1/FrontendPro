import React from 'react'
import SkeletonElement from './SkeletonElement'
import SkeletonBadge from '../skeletons/SkeletonBadge'
import SkeletonDifficultyBar from '../skeletons/SkeletonDifficultyBar'

const SkeletonChallengeCard = () => {
    return (
        <div className="shadow rounded-md max-w-sm w-full mx-auto">
            <div className="animate-pulse ">
                <SkeletonElement type="thumbnail" />
                <div className="p-4 pb-2">
                     <SkeletonBadge type="small"/>
                     <SkeletonBadge type="small"/>
                  </div>
                <div className="space-y-4 px-3 py-1">
                    <div className="card-content space-y-2 mb-4">
                        <SkeletonElement type="text" />
                        <SkeletonElement type="title" />
                        <SkeletonElement type="subtitle" />
                        <div></div>
                        <SkeletonElement type="subtitle" />
                        <SkeletonElement type="title" />
                        <SkeletonElement type="title" />
                    </div>
                </div>
               <SkeletonDifficultyBar />
               <div 
                  className="block mt-4 rounded-b w-full bg-gradient-to-br bg-gray-400 px-5 py-5">&emsp;</div>
            </div>
        </div>
    )
}

export default SkeletonChallengeCard
