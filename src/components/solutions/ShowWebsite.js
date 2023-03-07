import { useState } from "react"
import { useRouter } from "next/router"

import Icons from "../SvgIcons/Icons"

import WebsitePreview from "./WebsitePreview"

const URL = "https://www.frontendpro.dev"

const ShowWebsite = ({ url, title, github, isPlayground }) => {
  const siteView = ["w-96 mx-auto", "w-full"]
  const [view, setView] = useState(1)
  const router = useRouter()
  const { solutionId } = router.query

  const onError = () => {
    console.log("error")
  }

  return (
    <div className={`mt-4 ${siteView[view]}`}>
      <div className="w-full border border-gray-700 border-b-0 bg-gray-800 flex items-center justify-between rounded-t-lg p-3">
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
            href={github || `${URL}/playground/${solutionId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 border border-gray-600 bg-gray-700 transition hover:text-white hover:bg-gray-800 focus:outline-none p-2 mr-2 rounded-lg"
            aria-label={`${title} solution github repository`}
            title={`Link to ${title} solution github repository`}
          >
            <Icons.Code size={18} />
          </a>
          <a
            href={url || `${URL}/playground/${solutionId}`}
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
      <div className="relative border border-gray-700 h-screen">
        {isPlayground && <WebsitePreview />}
        {!isPlayground && (
          <iframe
            className="w-full h-screen overflow-y-scroll"
            src={url}
            onError={() => onError()}
            title={title}
            loading="lazy"
            height="700px"
          ></iframe>
        )}
      </div>
    </div>
  )
}

export default ShowWebsite
