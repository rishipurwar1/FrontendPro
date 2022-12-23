import React from "react"

import { DEFAULT_EMOJI_OPTIONS } from "../../utils/emojis"

import Emoji from "./Emoji"

const EmojiSection = () => {
  return (
    <div className="flex flex-wrap justify-center row-start-1 row-end-2 md:row-auto gap-x-7 gap-y-5 text-white bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-2 md:px-0 md:pr-2 pt-7 pb-4">
      {DEFAULT_EMOJI_OPTIONS.map((emoji) => (
        <Emoji key={emoji.label} emoji={emoji} />
      ))}
    </div>
  )
}

export default EmojiSection
