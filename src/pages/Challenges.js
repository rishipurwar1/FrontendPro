import React from "react"
import { Helmet } from "react-helmet"

import challengeLottie from "../assets/animated_illustrations/challenge.json"
import ChallengeCard from "../components/challenges/ChallengeCard"
import Hero from "../components/homepage/Hero"
import SkeletonChallengeCard from "../components/skeletons/SkeletonChallengeCard"
import { useCollection } from "../hooks/useCollection"

const Challenges = () => {
  const { documents, isLoading } = useCollection("challenges", null, null, [
    "createdAt",
    "desc",
  ])
  return (
    <main className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Helmet>
        <title>CODINGSPACE Challenges- Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="Here are some handcrafted challenges for you. Keep Coding! 👨‍💻"
        subTitle="Today is a great day to start a new challenge 🧑‍💻"
        mainImg={challengeLottie}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
        lottie
      />
      <h2 className="text-5xl text-center text-white font-heading font-bold">
        All Challenges
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {!isLoading
          ? documents.map((challenge) => {
              return (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  challengelist
                  btnTitle="View Challenge"
                />
              )
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonChallengeCard key={n} />)}
      </div>
    </main>
  )
}

export default Challenges
