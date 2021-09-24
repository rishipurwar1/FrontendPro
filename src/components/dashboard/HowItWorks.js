import React from "react"

// custom components
import Card from "./Card"

const HowItWorks = () => {
  return (
    <div className="mt-16">
      <h2 className="pb-2 text-5xl text-center text-white font-bold font-heading">
        How it works?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        <Card
          name="Sign up for free in 30 seconds"
          info="Connect your GitHub account using Sign Up button. You'll instantly gain access to our all the challenges"
          image="fas fa-user-lock"
          gradient="bg-gradient-to-br from-lightBlue-400 to-indigo-500"
          color="text-lightBlue-200"
        />
        <Card
          name="Find the right challenge"
          info="Choose the right challenge for you and start turning the design into a live website or mobile application"
          image="fas fa-code"
          gradient="bg-gradient-to-br from-yellow-400 to-orange-500"
          color="text-yellow-200"
        />
        <Card
          name="Share your solution"
          info="After completing the challenge, you can share your work with the world and get feedback from the community members"
          image="fas fa-share-alt"
          gradient="bg-gradient-to-br from-purple-500 to-indigo-500"
          color="text-purple-200"
          lastClass
        />
      </div>
    </div>
  )
}

export default HowItWorks
