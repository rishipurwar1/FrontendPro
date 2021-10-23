import React from "react"
import { useAuth } from "../../context/AuthContext"
import { useHistory } from "react-router-dom"

import comingSoon from "../../assets/animated_illustrations/commingsoon.svg"
import Button from "../smallComponents/Button"
import SignedOutLinks from "../layouts/SignedOutLinks"

const RoadmapsHero = () => {
  const { currentUser } = useAuth()
  const displayName = currentUser
    ? currentUser.displayName !== null
      ? currentUser.displayName.split(" ")[0]
      : "Coder"
    : "Coder"
  const history = useHistory()

  return (
    <div>
      <div className="mt-6 md:mt-2 mb-8">
        <p className="font-heading text-lg font-normaltext-3xl font-bold text-white">{`Hello ${displayName} 👋,`}</p>
        <p className="font-heading text-3xl font-bold text-white">
          Welcome To Coding Space 😊{" "}
        </p>
        <header className="mt-4 flex items-center xs:justify-center sm:justify-between xl:content-between bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl xs:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-md xs:flex-wrap-reverse sm:flex-nowrap">
          <div>
            <h1 className="text-white xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl lg:leading-10 lg:tracking-wide font-semibold font-heading py-4 sm:max-w-xs max-w-sm lg:max-w-lg hero.js">
              Comming Soon
            </h1>
            {currentUser ? (
              <Button
                name="Explore Challenges "
                logo="fas fa-arrow-right"
                bgColor="bg-gray-900"
                handleClick={() => history.push("")}
              />
            ) : (
              <SignedOutLinks bgColor="bg-gray-900" />
            )}
          </div>
          <div className="xs:h-56 xs:w-80 sm:h-60 sm:w-96 w-96 md:h-72 lg:h-80 lg:w-5/12 flex">
            <img src={comingSoon} alt="computer" />
          </div>
        </header>
      </div>
    </div>
  )
}

export default RoadmapsHero
