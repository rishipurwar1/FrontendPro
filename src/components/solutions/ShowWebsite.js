import React, { useState } from "react"

import Spinner from "../reusable/Spinner"
import Icons from "../SvgIcons/Icons"

const ShowWebsite = ({ url, title, github }) => {
  const siteView = ["w-96 mx-auto", "w-full"]
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState(1)
  const onLoad = () => {
    setLoading(false)
  }
  const onError = () => {
    console.log("error")
  }
  return (
    <div className={`mt-4 ${siteView[view]}`}>
      <div className="w-full border border-gray-700 bg-gray-800 flex items-center justify-between rounded-t-lg p-3">
        <div className="w-15">
          <span className="w-3 h-3 rounded-full inline-block bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block mx-2"></span>
          <span className="w-3 h-3 rounded-full inline-block bg-green-500"></span>
        </div>
        <div className="flex">
          <button
            className="flex items-center text-gray-400 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800 focus:outline-none p-2 mr-2 rounded-lg"
            onClick={() => setView(1)}
          >
            <Icons.Desktop size={18} />
          </button>
          <button
            className="flex items-center text-gray-400 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800 focus:outline-none p-2 mr-2 rounded-lg"
            onClick={() => setView(0)}
          >
            <Icons.Phone size={18} />
          </button>
        </div>
        <div className="flex">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800 focus:outline-none p-2 mr-2 rounded-lg"
            aria-label={`${title} solution github repository`}
            title={`Link to ${title} solution github repository`}
          >
            <Icons.Code size={18} />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800 focus:outline-none p-2 rounded-lg"
            aria-label={`${title} website`}
            title={`Link to ${title} website`}
          >
            <Icons.ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="relative border border-gray-700">
        {loading ? <Spinner /> : null}
        <iframe
          className="w-full h-screen overflow-y-scroll"
          src={url}
          onLoad={() => onLoad()}
          onError={() => onError()}
          title={title}
          height="700px"
        ></iframe>
      </div>
    </div>
  )
}

export default ShowWebsite
