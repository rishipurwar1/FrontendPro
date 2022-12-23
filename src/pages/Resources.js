import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import ResourcesIll from "../assets/animated_illustrations/resources.json"
import Hero from "../components/homepage/Hero"
import Card from "../components/reusable/Card"
import SkeletonCard from "../components/skeletons/SkeletonCard"
import Icons from "../components/SvgIcons/Icons"
import { analytics, logEvent } from "../firebase/config"
import { useCollection } from "../hooks/useCollection"

const Resources = () => {
  const { documents, isLoading } = useCollection("resources", null, null, [
    "createdAt",
    "desc",
  ])

  useEffect(() => {
    logEvent(analytics, "resources_page_visited")
  }, [])

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Helmet>
        <title>Resources - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="Here you can find all the frontend and backend development resources."
        subTitle="Welcome To Coding Space 😊"
        mainImg={ResourcesIll}
        btnTitle="Explore Challenges"
        icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
        route="/challenges"
      />
      <h2 className="text-5xl text-center text-white font-extrabold">Resources</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {!isLoading
          ? documents.map((resource) => {
              return <Card key={resource.id} card={resource} />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)}
      </div>
    </div>
  )
}

export default Resources
