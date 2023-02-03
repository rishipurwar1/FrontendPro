import React, { useEffect } from "react"

import comingSoon from "../assets/animated_illustrations/coming_soon.json"
import LottieAnimation from "../components/reusable/LottieAnimation"
import { analytics, logEvent } from "../firebase/config"

const Roadmaps = () => {
  useEffect(() => {
    logEvent(analytics, "roadmaps_page_visited")
  }, [])

  return (
    <div className="mt-5 mb-6 md:mb-0 row-start-2 row-end-3 col-start-2 col-end-3 self-center	">
      <p className="text-center text-white font-extrabold text-4xl">
        We&apos;re building!
        <span role="img" aria-label="building-emoji">
          👷‍♂️
        </span>
      </p>
      <LottieAnimation className="w-96" animationDataFile={comingSoon} />
    </div>
  )
}

export default Roadmaps
