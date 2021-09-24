import React from "react"
import { useHistory } from "react-router-dom"
import Lottie from "react-lottie"

// custom components
import { useAuth } from "../../context/AuthContext"
import Button from "../smallComponents/Button"
import SignedOutLinks from "../layouts/SignedOutLinks"

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, logoTitle, route }) => {
  const { currentUser } = useAuth()
  const displayName = currentUser
    ? currentUser.displayName !== null
      ? currentUser.displayName.split(" ")[0]
      : "Coder"
    : "Coder"
  const history = useHistory()

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="mt-6 md:mt-2 mb-8">
      <p
        className={`font-heading ${
          homepage ? "text-lg font-normal" : "text-3xl font-bold"
        } text-white`}
      >{`Hello ${displayName} 👋,`}</p>
      <p
        className={`font-heading ${
          homepage ? "text-3xl font-bold" : "text-lg font-normal"
        } text-white`}
      >
        {subTitle}
      </p>
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl xs:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-md xs:flex-wrap-reverse sm:flex-nowrap">
        <div>
          <h1 className="text-white xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl font-semibold font-heading py-4 sm:max-w-xs max-w-sm">
            {title}
          </h1>
          {currentUser ? (
            <Button
              name={btnTitle}
              logo={logoTitle}
              bgColor="bg-gray-900"
              handleClick={() => history.push(route)}
            />
          ) : (
            <SignedOutLinks bgColor="bg-gray-900" />
          )}
        </div>
        <div className="xs:h-56 xs:w-72 sm:h-60 sm:w-96 w-96 md:h-72 lg:h-80">
          <Lottie options={defaultOptions} />
        </div>
      </header>
    </div>
  )
}

export default Hero
