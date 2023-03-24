import Head from "next/head"

import Header from "../components/reusable/Header"
import Image from "next/image"
import comingSoon from "../assets/illustrations/coming-soon.png"

const Roadmaps = () => {
  return (
    <>
      <Head>
        <title>FrontendPro - Roadmaps</title>
      </Head>
      <Header
        title="Explore Roadmaps"
        description="Explore our comprehensive frontend development roadmaps designed to guide you through the learning process, improve your skills, and achieve your career goals.
        "
        gradientClasses="bg-gradient-to-r from-fuchsia-600 to-pink-600"
      />
      <section className="rounded-lg bg-gray-900 border border-gray-700 p-6 flex flex-col items-center">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
          Coming Soon
        </h2>
        <Image
          src={comingSoon}
          width={500}
          height={500}
          alt="roadmaps coming soon"
          className="-mt-14"
        />
      </section>
    </>
  )
}

export default Roadmaps
