import React, { useState } from "react"

import Spinner from "../reusable/Spinner"

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
      <div className="h-12 w-full border border-gray-700 bg-gray-800 flex items-center justify-between rounded-t-lg px-4 py-6">
        <div className="w-15">
          <span className="w-3 h-3 rounded-full inline-block bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block mx-2"></span>
          <span className="w-3 h-3 rounded-full inline-block bg-green-500"></span>
        </div>
        <div>
          <i
            className="fas fa-desktop mr-4 text-white text-3xl cursor-pointer"
            onClick={() => setView(1)}
          ></i>
          <i
            className="fas fa-mobile-alt text-white text-3xl cursor-pointer"
            onClick={() => setView(0)}
          ></i>
        </div>
        <div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
            aria-label={`${title} solution github repository`}
            title={`Link to ${title} solution github repository`}
          >
            <i className="fas fa-code text-white text-2xl cursor-pointer"></i>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} website`}
            title={`Link to ${title} website`}
          >
            <i className="fas fa-external-link-alt text-white text-2xl cursor-pointer"></i>
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
