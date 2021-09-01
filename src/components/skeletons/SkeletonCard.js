import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonCard = () => {
    return (
        <div class="shadow rounded-md max-w-sm w-full mx-auto">
            <div class="animate-pulse flex flex-col">
                <SkeletonElement type="thumbnail" />
                <div class="flex-1 space-y-4 px-3 py-1">
                    <div class=""></div>
                    <div class="space-y-2">
                        <SkeletonElement type="text" />
                        <SkeletonElement type="subtitle" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard
