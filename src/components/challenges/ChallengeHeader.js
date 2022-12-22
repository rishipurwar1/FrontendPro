import React from "react"
import { Image, Placeholder, Transformation } from "cloudinary-react"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import Badge from "../reusable/Badge"
import Button from "../reusable/Button"
import DownloadButton from "../reusable/DownloadButton"
import DownloadButtonNotLogin from "../reusable/DownloadButtonNotLogin"
import Icons from "../SvgIcons/Icons"

const ChallengeHeader = ({ doc, button }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const displayName = user
    ? !user?.displayName
      ? user?.reloadUserInfo.screenName
      : user?.displayName.split(" ")[0]
    : "Coder"

  const renderButton = () =>
    user ? <DownloadButton document={doc} /> : <DownloadButtonNotLogin />

  return (
    <div className="mt-2 mb-8">
      <h2 className="text-3xl font-extrabold text-white">
        Hello {displayName}{" "}
        <span
          className="animate-wave inline-block origin-[70%_70%]"
          role="img"
          aria-label="Hello"
        >
          👋
        </span>
        ,
      </h2>
      <p className="text-lg font-normal text-white">
        Today is a great day to start this challenge{" "}
        <span role="img" aria-label="welcome">
          😊
        </span>
      </p>
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-indigo-600 rounded-lg shadow-md xs:px-5 md:px-8 py-4 xs:h-full sm:max-h-96 xs:flex-wrap-reverse sm:flex-nowrap">
        <div className="xs:w-full sm:w-1/2">
          <h2 className="leading-snug xs:text-3xl lg:text-5xl text-white font-bold pb-2">
            {doc.title}
          </h2>
          <div className="py-2">
            {doc.tags.map((tag) => (
              <Badge key={tag} name={tag} badgeColor="text-gray-300 bg-gray-900" />
            ))}
          </div>
          <p className="text-base mb-4 xs:w-full sm:w-4/5 lg:w-3/5 text-gray-200">
            {doc.description}
          </p>
          {button ? (
            <Button
              variant="secondary"
              size="large"
              className="font-medium"
              onClick={() => navigate("/solutions")}
            >
              Explore Solutions
              <Icons.ArrowRight className="ml-2" />
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
