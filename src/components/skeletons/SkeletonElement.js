import React from "react"

const SkeletonElement = ({ type }) => {
  let tailwindClass = ""
  switch (type) {
    case "title":
      tailwindClass = "h-3 mt-2 mb-4 bg-gray-700 rounded-full w-4/6"
      break
    case "text-lg":
      tailwindClass = "h-2 mt-2 bg-gray-700 rounded-full w-4/5"
      break
    case "text-md":
      tailwindClass = "h-2 mt-2 bg-gray-700 rounded-full w-8/12"
      break
    case "text":
      tailwindClass = "h-2 mt-2 bg-gray-700 rounded-full w-2/4"
      break
    case "userInfo":
      tailwindClass = "h-2 rounded-full bg-gray-700 w-32 mb-2"
      break
  }
  return <div className={tailwindClass}></div>
}

export default SkeletonElement
