import React from "react"
import { Helmet } from "react-helmet"

import solutionLottie from "../../assets/animated_illustrations/solution_animation.json"
import { useCollection } from "../../hooks/useCollection"
import Hero from "../dashboard/Hero"
import SkeletonSolutionSummaryCard from "../skeletons/SkeletonSolutionSummaryCard"

import SolutionSummary from "./SolutionSummary"

const ShowSolutions = () => {
  const { documents } = useCollection("solutions", ["completed", "==", true], null, [
    "createdAt",
    "desc",
  ])
  return (
    <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Helmet>
        <title>All Community Solutions - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="What's stopping you from moving forward? All the solutions you need are right here!"
        subTitle="Welcome To Coding Space 😊"
        mainImg={solutionLottie}
        btnTitle="My Solutions "
        logoTitle="fas fa-arrow-right ml-2"
        route="/mysolutions"
        lottie
      />
      <main>
        <h1 className="text-5xl heading text-center p-5 font-semibold text-white pb-7">
          Solutions
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
          {documents
            ? documents.map((solution) => {
                return <SolutionSummary key={solution.id} solution={solution} />
              })
            : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonSolutionSummaryCard key={n} />)}
        </div>
      </main>
    </div>
  )
}

export default ShowSolutions
