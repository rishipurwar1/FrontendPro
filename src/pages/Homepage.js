import React, { useEffect } from "react"

import heroImg from "../assets/animated_illustrations/Blogging.json"
import Newsletter from "../components//newsletter/Newsletter"
import Challenges from "../components/challenges/Challenges"
import Hero from "../components/homepage/Hero"
import HowItWorks from "../components/homepage/HowItWorks"
import { analytics, logEvent } from "../firebase/config"

const Homepage = () => {
  useEffect(() => {
    logEvent(analytics, "homepage_visited")
  }, [])
  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Hero
        title="Master Web Development by Building Real World Projects"
        subTitle="Welcome To Coding Space"
        mainImg={heroImg}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        homepage
        route="/challenges"
      />
      <HowItWorks />
      <Challenges />
      <Newsletter />
    </div>
  )
}

export default Homepage
