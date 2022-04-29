import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

import rocketLoader from "../../assets/animated_illustrations/loader.json"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useDocument } from "../../hooks/useDocument"
import ContributorProfile from "../reusable/ContributorProfile"
import DownloadButton from "../reusable/DownloadButton"
import DownloadButtonNotLogin from "../reusable/DownloadButtonNotLogin"
import DropDown from "../reusable/DropDown"
import LottieAnimation from "../reusable/LottieAnimation"

// Components
import ChallengeHeader from "./ChallengeHeader"

const ChallengeDetails = () => {
  const { id } = useParams()
  const { document } = useDocument("challenges", id)
  const { user } = useAuthContext()
  const [figmaURL, setFigmaURL] = useState(0)

  const renderButton = () =>
    user ? (
      <DownloadButton
        color="bg-gradient-to-br from-purple-500 to-indigo-500"
        document={document}
      />
    ) : (
      <DownloadButtonNotLogin color="bg-gradient-to-br from-purple-500 to-indigo-500" />
    )

  if (!document)
    return (
      <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
        <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
      </div>
    )

  return (
    <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Helmet>
        <title>{`${document.title} CODINGSPACE Challenge`}</title>
      </Helmet>
      <ChallengeHeader doc={document} />
      <div className="overflow-hidden relative">
        <iframe
          className="iframe-embed border-gray-50 w-full -mb-12"
          src={`https://www.figma.com/embed?embed_host=share&url=${
            figmaURL === 0
              ? document.figmaURLs.desktop || document.figmaURLs.mobile
              : document.figmaURLs.mobile
          }`}
          title={`screen-${figmaURL}`}
          allowFullScreen
        ></iframe>
        {document.figmaURLs.desktop && (
          <DropDown setFigmaURL={(index) => setFigmaURL(index)} />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="text-white">
          <h2 className="text-2xl font-semibold pb-1 text-purple-500">
            About the challenge
          </h2>
          <p className="text-gray-300">{document.description}</p>
          <h3 className="text-2xl font-semibold pt-4 pb-2 text-purple-500">
            Requirements:
          </h3>
          <ul className="text-gray-300 list-disc pl-5">
            {document.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="text-white xs:mt-4 sm:mt-0 sm:pl-6">
          <h2 className="text-2xl font-semibold pb-1 text-purple-500">
            What you&apos;ll learn?
          </h2>
          <p className="text-gray-300 pb-2">{`${document.learning} So what are you waiting for?`}</p>
          <p className="mb-3">
            Click on the download button to get started.{" "}
            <span role="img" aria-label="hand emoji">
              👇
            </span>
          </p>
          {renderButton()}
          {document.contributor && (
            <>
              <h2 className="text-2xl font-semibold pb-1 text-purple-500 mt-5">
                Contributed By:
              </h2>
              <ContributorProfile contributor={document.contributor} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChallengeDetails
