import React from "react"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Button from "../reusable/Button"
import LottieAnimation from "../reusable/LottieAnimation"

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, logoTitle, route }) => {
  const { user } = useAuthContext()
  const displayName = user
    ? !user?.displayName
      ? user?.reloadUserInfo.screenName
      : user?.displayName.split(" ")[0]
    : "Coder"
  const navigate = useNavigate()

  return (
    <div className="mt-6 md:mt-2 mb-8">
      <p
        className={`font-heading ${
          homepage ? "text-lg font-normal" : "text-3xl font-bold"
        } text-white`}
      >
        {`Hello ${displayName} `}
        <span
          className="animate-wave inline-block origin-[70%_70%]"
          role="img"
          aria-label="Hello"
        >
          👋
        </span>
        ,
      </p>
      <p
        className={`font-heading ${
          homepage ? "text-3xl font-bold" : "text-lg font-normal"
        } text-white`}
      >
        {subTitle}
      </p>
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl xs:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-md xs:flex-wrap-reverse sm:flex-nowrap">
        <div>
          <h1 className="text-white xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl font-semibold font-heading pb-4 sm:max-w-xs max-w-sm">
            {title}
          </h1>
          {user ? (
            <Button bgColor="bg-gray-900" handleClick={() => navigate(route)}>
              {btnTitle} <i className={logoTitle}></i>
            </Button>
          ) : (
            <SignedOutLinks bgColor="bg-gray-900" />
          )}
        </div>
        <LottieAnimation animationDataFile={mainImg} />
      </header>
    </div>
  )
}

export default Hero
