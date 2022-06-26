import React from "react"
import { Helmet } from "react-helmet"
import Lottie from "react-lottie"

import comingSoon from "../../assets/animated_illustrations/coming_soon.json"

const Roadmaps = () => {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: comingSoon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className="mt-5 row-start-2 row-end-3 col-start-2 col-end-3 self-center	">
      <Helmet>
        <title>CODINGSPACE Roadmaps - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <p className="text-center text-white font-heading font-bold text-4xl">
        We&apos;re building!
        <span role="img" aria-label="building-emoji">
          👷‍♂️
        </span>
      </p>
      <Lottie height={420} width={420} options={defaultOptions} />
    </div>
  )
}

export default Roadmaps
