import React, { useEffect } from "react"

import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import Tabs from "../components/reusable/Tabs"
import Icons from "../components/SvgIcons/Icons"
import { analytics, logEvent } from "../firebase/config"
import { useAuthContext } from "../hooks/useAuthContext"

const MySolutions = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    logEvent(analytics, "my_solutions_page_visited")
  }, [])
  return (
    <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3 text-purple-50 min-h-screen">
      <Hero
        title="Here you can find all the solutions and ongoing challenges details."
        subTitle="Welcome To Coding Space 😊"
        mainImg={mainImg}
        btnTitle="Explore Challenges"
        icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
        route="/challenges"
      />
      <h2 className="text-5xl text-center text-white font-extrabold">My Solutions</h2>
      {user ? <Tabs userID={user.uid} /> : null}
    </div>
  )
}

export default MySolutions
