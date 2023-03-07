import Head from "next/head"

import ResourcesIll from "../assets/animated_illustrations/resources.json"
import Hero from "../components/homepage/Hero"
import Card from "../components/reusable/Card"
import Icons from "../components/SvgIcons/Icons"
import { getDocuments } from "../firebase/firestore"

const Resources = ({ resources }) => {
  return (
    <>
      <Head>
        <title>FrontendPro - Resources</title>
      </Head>
      <div className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
        <Hero
          title="Here you can find all the frontend and backend development resources."
          subTitle="Welcome To FrontendPro 😊"
          mainImg={ResourcesIll}
          btnTitle="Explore Challenges"
          icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
          route="/challenges"
        />
        <h2 className="text-5xl text-center text-white font-extrabold">Resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
          {resources?.map((resource) => {
            return <Card key={resource.id} card={resource} />
          })}
        </div>
      </div>
    </>
  )
}

export default Resources

export async function getStaticProps() {
  const resources = await getDocuments("resources")

  return {
    props: {
      resources,
    },
  }
}
