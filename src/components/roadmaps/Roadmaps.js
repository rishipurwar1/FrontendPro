import React from "react"
import RoadmapsHero from "./RoadmapsHero"

const Roadmaps = () => {
  return (
    <div className="mt-5 md:m-5 row-start-2 row-end-3 col-start-2 col-end-3 self-center	">
      <RoadmapsHero />
      <h2 className="text-5xl text-center text-white font-bold  font-heading">
        {/* Roadmaps  Text */}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {/* Roadmap Cards */}
      </div>
    </div>
  )
}

export default Roadmaps
