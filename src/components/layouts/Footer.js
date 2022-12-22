import React from "react"

import BrandIcons from "../SvgIcons/BrandIcons"
import EmojiIcons from "../SvgIcons/EmojiIcons"
import Icons from "../SvgIcons/Icons"

const Footer = () => {
  return (
    <footer className="mt-7 col-start-2 col-end-3 row-start-3 row-end-4 flex xs:flex-col sm:flex-row items-center justify-between py-3 px-4  bg-gray-900 border-t border-gray-800 shadow-lg text-gray-300 h-20">
      <h4 className="flex items-center space-x-1">
        <EmojiIcons.Rocket size={32} />
        <span>CODINGSPACE</span>
      </h4>
      <small className="xs:py-4 sm:py-0 flex items-center">
        <Icons.CopyRight size={16} className="mr-2 -ml-1" />
        {`${new Date().getFullYear()}`} CODINGSPACE. All right reserved
      </small>
      <div className="social flex items-center justify-center py-3">
        <a
          href="https://github.com/rishipurwar1/coding-space"
          className="px-2"
          aria-label="codingspace github repository"
          title="this is a link to codingspace github repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandIcons.GitHub size={18} className="hover:fill-current" />
        </a>
        <a
          href="https://twitter.com/thefierycoder"
          className="px-2"
          aria-label="codingspace twitter account"
          title="this is a link to codingspace twitter account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandIcons.Twitter size={18} className="hover:fill-current" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
