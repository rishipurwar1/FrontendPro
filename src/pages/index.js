import Head from "next/head"

import Newsletter from "../components//newsletter/Newsletter"
import Header from "../components/homepage/Header"
import HowItWorks from "../components/homepage/HowItWorks"
import LatestChallenges from "../components/homepage/LatestChallenges"
import LatestResources from "../components/homepage/LatestResources"
import LatestSolutions from "../components/homepage/LatestSolutions"
import { getDocuments } from "../firebase/firestore"

const Homepage = ({ challenges, solutions, resources }) => {
  return (
    <>
      <Head>
        <title>
          FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges
        </title>
      </Head>
      <div className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
        <Header />
        <HowItWorks />
        <LatestChallenges challenges={challenges} />
        <LatestSolutions solutions={solutions} />
        <LatestResources resources={resources} />
        <Newsletter />
      </div>
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
