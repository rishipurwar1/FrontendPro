import React from "react"
import { Helmet } from "react-helmet"

import challengeLottie from "../assets/animated_illustrations/challenge.json"
import Hero from "../components/homepage/Hero"
import Card from "../components/reusable/Card"
import SkeletonCard from "../components/skeletons/SkeletonCard"
import Icons from "../components/SvgIcons/Icons"
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
        route="/challenges"
        icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
        lottie
      />
      <h2 className="text-5xl text-center text-white font-extrabold">Challenges</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {!isLoading
          ? documents.map((challenge) => {
              return (
                <Card key={challenge.id} card={challenge} challengelist isChallenge />
              )
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard isChallenge key={n} />)}
      </div>
    </main>
  )
}

export default Challenges
