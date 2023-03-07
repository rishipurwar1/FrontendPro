import Head from "next/head"

import challengeLottie from "../assets/animated_illustrations/challenge.json"
import Hero from "../components/homepage/Hero"
import Card from "../components/reusable/Card"
import Icons from "../components/SvgIcons/Icons"
import { getDocuments } from "../firebase/firestore"

const Challenges = ({ challenges }) => {
  return (
    <>
      <Head>
        <title>FrontendPro - Challenges</title>
      </Head>
      <main className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
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
          {challenges?.map((challenge) => {
            return <Card key={challenge.id} card={challenge} challengelist isChallenge />
          })}
        </div>
      </main>
    </>
  )
}

export default Challenges

export async function getStaticProps() {
  const challenges = await getDocuments("challenges")

  return {
    props: {
      challenges,
    },
  }
}
