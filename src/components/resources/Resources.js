import React from "react"
// custom firebase hook
import useFirestore from "../../hooks/useFirestore"
// custom components
import Hero from "../dashboard/Hero"
import ResourcesIll from "../../assets/animated_illustrations/resources.json"
import ResourceCard from "./ResourceCard"
import SkeletonResourceCard from "../skeletons/SkeletonResourceCard"

const Resources = () => {
  const { docs } = useFirestore("resources")

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Hero
        title="Here you can find all the frontend and backend development resources."
        subTitle="Welcome To Coding Space 😊"
        mainImg={ResourcesIll}
        btnTitle="Explore Challenges "
        logoTitle="fas fa-arrow-right"
      />
      <h2 className="text-5xl text-center text-white font-bold  font-heading">
        Resources
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {docs.length
          ? docs.map((resource) => {
              return <ResourceCard key={resource.id} resource={resource} />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonResourceCard key={n} />)}
      </div>
    </div>
  )
}

export default Resources
