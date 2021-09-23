import React from "react"

const SkeletonElement = ({ type }) => {
  let tailwindClass = ""
  switch (type) {
    case "text":
      tailwindClass = "h-4 mt-2 mb-4 bg-gray-400 rounded w-4/5"
      break
    case "subtitle":
      tailwindClass = "h-4 my-2 bg-gray-400 rounded w-5/6"
      break
    case "title":
      tailwindClass = "h-4 my-2 bg-gray-400 rounded w-4/6"
      break
    case "userInfo":
      tailwindClass = "h-4 my-1 bg-gray-400 rounded w-3/5"
      break
    case "avatar":
      tailwindClass = "w-12 h-12 rounded-full"
      break
    case "thumbnail":
      tailwindClass = "max-w-sm h-60 rounded-md"
      break

    default:
    // code block
  }
  const classes = `bg-gray-400 ${tailwindClass}`
  return <div className={classes}></div>
}

export default SkeletonElement
