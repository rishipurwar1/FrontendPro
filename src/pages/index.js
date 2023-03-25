import Head from "next/head"

import Newsletter from "../components//newsletter/Newsletter"
import HowItWorks from "../components/homepage/HowItWorks"
import LatestChallenges from "../components/homepage/LatestChallenges"
import LatestResources from "../components/homepage/LatestResources"
import LatestSolutions from "../components/homepage/LatestSolutions"
import { getDocuments } from "../firebase/firestore"
import Hero from "../components/homepage/Hero"
import Testimonial from "../components/reusable/Testimonial"

const Homepage = ({ challenges, solutions, resources }) => {
  return (
    <>
      <Head>
        <title>Become a Pro in Frontend Dev with our Frontend Challenges</title>
      </Head>
      <main className="px-6 pb-6 rounded-lg bg-gray-900 border border-gray-700">
        <Hero />
        <Testimonial />
        <HowItWorks />
        <LatestChallenges challenges={challenges} />
        <LatestSolutions solutions={solutions} />
        <LatestResources resources={resources} />
        <Newsletter />
      </main>
    </>
  )
}

export default Homepage

export async function getStaticProps() {
  const challenges = await getDocuments("challenges", null, 6)
  const solutions = await getDocuments("solutions", ["completed", "==", true], 6)
  const resources = await getDocuments("resources", null, 6)

  return {
    props: {
      challenges,
      solutions,
      resources,
    },
  }
}
