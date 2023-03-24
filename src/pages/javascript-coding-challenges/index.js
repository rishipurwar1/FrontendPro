import React from "react"
import Header from "../../components/reusable/Header"
import Image from "next/image"
import comingSoon from "../../assets/illustrations/coming-soon.png"
import Head from "next/head"

const JavascriptCodingChallenges = () => {
  return (
    <>
      <Head>
        <title>FrontendPro - JavaScript Coding Challenges</title>
      </Head>
      <main>
        <Header
          title="JavaScript Coding Challenges"
          description="Take your JavaScript coding skills to the next level with our curated
        collection of most asked JavaScript coding interview questions and exercises. 🚀"
          gradientClasses="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
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
      </main>
    </>
  )
}

export default JavascriptCodingChallenges
