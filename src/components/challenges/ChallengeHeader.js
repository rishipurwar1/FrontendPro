import React from "react"
import { Image, Placeholder, Transformation } from "cloudinary-react"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import Badge from "../reusable/Badge"
import Button from "../reusable/Button"
import DownloadButton from "../reusable/DownloadButton"
import DownloadButtonNotLogin from "../reusable/DownloadButtonNotLogin"

const ChallengeHeader = ({ doc, button }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const displayName = user
    ? !user?.displayName
      ? user?.reloadUserInfo.screenName
      : user?.displayName.split(" ")[0]
    : "Coder"

  const renderButton = () =>
    user ? (
      <DownloadButton color="bg-gray-900" document={doc} />
    ) : (
      <DownloadButtonNotLogin color="bg-gray-900" />
    )

  return (
    <div className="mt-2 mb-8">
      <h2 className="font-heading text-3xl font-bold text-white">
        Hello {displayName}{" "}
        <span role="img" aria-label="Hello">
          👋
        </span>
        ,
      </h2>
      <p className="font-heading text-lg font-normal text-white">
        Today is a great day to start this challenge{" "}
        <span role="img" aria-label="welcome">
          😊
        </span>
      </p>
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-md xs:px-5 md:px-8 py-4 xs:h-full sm:max-h-96 xs:flex-wrap-reverse sm:flex-nowrap">
        <div className="xs:w-full sm:w-1/2">
          <h2 className="leading-snug xs:text-3xl lg:text-5xl text-white font-semibold font-heading pb-2">
            {doc.title}
          </h2>
          <div className="py-2">
            {doc.tags.map((tag) => (
              <Badge
                key={tag}
                name={tag}
                badgeColor="text-gray-300 bg-gray-900"
                challengeDetails
              />
            ))}
          </div>
          <p className="text-base mb-4 xs:w-full sm:w-4/5 lg:w-3/5 text-gray-200">
            {doc.description}
          </p>
          {button ? (
            <Button bgColor="bg-gray-900" handleClick={() => navigate("/solutions")}>
              Explore Solutions <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          ) : (
            renderButton()
          )}
        </div>
        <div className="">
          <Image
            className="rounded-xl xs:h-auto xs:w-full sm:w-auto sm:h-64 md:h-72 lg:h-80 xs:mb-4 sm:mb-0"
            alt={`${doc.title} Challenge`}
            cloudName="di5hmgowi"
            public-id={doc.images.cover}
          >
            <Placeholder type="pixelate" />
            <Transformation crop="fill" />
          </Image>
        </div>
      </header>
    </div>
  )
}

export default ChallengeHeader
