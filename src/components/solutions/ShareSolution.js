import React, { useState } from "react"
import ShareIconItem from "../smallComponents/ShareIconItem"

const ShareSolution = () => {
  const url = window.location.href
  const [copyText, setCopyText] = useState("Copy")
  const onCopyLink = () =>
    navigator.clipboard.writeText(url).then(() => setCopyText("Copied"))
  const [text, setText] = useState(
    `Hello Everyone!\nI've just completed the "Random Quote Generator" CODINGSPACE Challenge.\n\nHere's a link to my solution: ${url} \n\nAny feedback and suggestions on how I can improve are very welcome!`
  )
  const iconsList = [
    {
      title: "Twitter",
      iconName: "fa-twitter",
      href: `https://twitter.com/share?text=${encodeURI(text)}`,
      hoverColor: "text-twitter",
    },
    {
      title: "Discord",
      iconName: "fa-discord",
      href: `https://twitter.com/share?url=${url}`,
      hoverColor: "text-discord",
    },
    {
      title: "Linkedin",
      iconName: "fa-linkedin",
      href: `https://www.linkedin.com/sharing/share-offsite?url=${url}&summary=${encodeURI(
        text
      )}`,
      hoverColor: "text-linkedin",
    },
    {
      title: "Reddit",
      iconName: "fa-reddit",
      href: `https://www.reddit.com/submit?url=${url}&title=${encodeURI(text)}`,
      hoverColor: "text-reddit",
    },
    {
      title: "Facebook",
      iconName: "fa-facebook-f",
      href: `https://www.facebook.com/sharer/sharer.php?&u=${url}&quote=${encodeURI(
        text
      )}`,
      hoverColor: "text-facebook",
    },
  ]
  return (
    <div
      className="pt-4 px-8 pb-8 rounded"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div className="flex flex-row justify-between mb-4">
        {iconsList.map((icon, index) => (
          <ShareIconItem
            key={index}
            title={icon.title}
            iconName={icon.iconName}
            href={icon.href}
            hoverColor={icon.hoverColor}
          />
        ))}
      </div>
      <span className="text-xs text-gray-300">Copy Link</span>
      <div className="border border-purple-500 p-2 flex justify-between rounded">
        <p className="w-5/6 text-xs overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-300">
          {url}
        </p>
        <span
          className="text-xs cursor-pointer text-link transform hover:text-gray-300"
          onClick={onCopyLink}
        >
          {copyText}
        </span>
      </div>
      <div className="w-full mt-4">
        <span className="text-xs text-gray-300">Share a Summary</span>
        <textarea
          className="w-full text-xs outline-none border border-purple-500 bg-gray-900 text-gray-300 rounded p-2 resize-none h-40"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ShareSolution
