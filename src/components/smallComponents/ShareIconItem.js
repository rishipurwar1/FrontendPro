import React from "react"

const ShareIconItem = ({ title, iconName, href, hoverColor }) => {
  const hover = hoverColor ? `hover:${hoverColor}` : `hover:text-gray-300`
  return (
    <a
      className="h-12 w-12 border border-transparent items-center justify-center flex rounded-full p-5 transform hover:border-purple-500"
      target="_blank"
      rel="noreferrer"
      href={href}
      title={title}
    >
      <i
        className={`fab ${iconName} text-xl text-link transform hover:scale-125 ${hover}`}
      />
    </a>
  )
}

export default ShareIconItem
