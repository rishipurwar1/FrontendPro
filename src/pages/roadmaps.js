import Head from "next/head"

import comingSoon from "../assets/animated_illustrations/coming_soon.json"
import LottieAnimation from "../components/reusable/LottieAnimation"

const Roadmaps = () => {
  return (
    <>
      <Head>
        <title>FrontendPro - Roadmaps</title>
      </Head>
      <div className="mt-5 mb-6 md:mb-0 row-start-2 row-end-3 col-start-2 col-end-3 self-center	">
        <p className="text-center text-white font-extrabold text-4xl">
          We&apos;re building!
          <span role="img" aria-label="building-emoji">
            👷‍♂️
          </span>
        </p>
        <LottieAnimation className="w-96" animationDataFile={comingSoon} />
      </div>
    </>
  )
}

export default Roadmaps
