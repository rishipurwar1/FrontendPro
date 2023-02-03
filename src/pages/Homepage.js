import React, { useEffect } from "react"

import Newsletter from "../components//newsletter/Newsletter"
import Header from "../components/homepage/Header"
import HowItWorks from "../components/homepage/HowItWorks"
import LatestChallenges from "../components/homepage/LatestChallenges"
import LatestResources from "../components/homepage/LatestResources"
import LatestSolutions from "../components/homepage/LatestSolutions"
import { analytics, logEvent } from "../firebase/config"

const Homepage = () => {
  useEffect(() => {
    logEvent(analytics, "homepage_visited")
  }, [])
  return (
    <div className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Header />
      <HowItWorks />
      <LatestChallenges />
      <LatestSolutions />
      <LatestResources />
      <Newsletter />
    </div>
  )
}

export default Homepage
