import React from "react"

import heroImg from "../../assets/animated_illustrations/Blogging.json"
import Challenges from "../challenges/Challenges"
import Newsletter from "../newsletter/Newsletter"

import Hero from "./Hero"
import HowItWorks from "./HowItWorks"

const Dashboard = () => {
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

export default Dashboard
