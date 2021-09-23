import React from "react"

const DifficultyIndicator = () => {
  return (
    <>
      <div className="flex-1">
        <div className="w-6 h-6 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="w-1/6 align-center items-center align-middle content-center flex">
        <div className="w-full rounded items-center align-middle align-center flex-1">
          <div className="bg-secondary py-1 rounded w-full"></div>
        </div>
      </div>
    </>
  )
}

export default DifficultyIndicator
