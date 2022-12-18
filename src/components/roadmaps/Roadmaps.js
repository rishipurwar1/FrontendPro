import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import comingSoon from "../../assets/animated_illustrations/coming_soon.json"
import { analytics, logEvent } from "../../firebase/config"
import LottieAnimation from "../reusable/LottieAnimation"

const Roadmaps = () => {
  useEffect(() => {
    logEvent(analytics, "roadmaps_page_visited")
  }, [])

  return (
    <div className="mt-5 row-start-2 row-end-3 col-start-2 col-end-3 self-center">
      <Helmet>
        <title>CODINGSPACE Roadmaps - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <div className="flex items-center flex-col justify-center">
        <p className="text-center text-white font-heading font-bold text-4xl mb-8">
          We&apos;re building!
          <span role="img" aria-label="building-emoji">
            👷‍♂️
          </span>
        </p>
        <LottieAnimation animationDataFile={comingSoon} />
      </div>
    </div>
  )
}

export default Roadmaps
