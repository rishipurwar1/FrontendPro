import React from "react"
import { useParams } from "react-router-dom"

import { useDocument } from "../../hooks/useDocument"
import { DEFAULT_EMOJI_OPTIONS } from "../../utils/emojis"

import Emoji from "./Emoji"

const EmojiSection = () => {
  const { id: docID } = useParams()
  const { document: reactions } = useDocument(`solutions/${docID}/reactions`, "emojis")

  return (
    <div className="flex flex-wrap justify-center row-start-1 row-end-2 md:row-auto gap-x-7 gap-y-5 text-white bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-2 md:px-0 md:pr-2 pt-7 pb-4">
      {DEFAULT_EMOJI_OPTIONS.map((emoji) => (
        <Emoji key={emoji.label} reactions={reactions} emoji={emoji} />
      ))}
    </div>
  )
}

export default EmojiSection
