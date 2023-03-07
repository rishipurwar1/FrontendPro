import Head from "next/head"

import solutionLottie from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import Card from "../components/reusable/Card"
import Icons from "../components/SvgIcons/Icons"
import { getDocuments } from "../firebase/firestore"
import { useAuthContext } from "../hooks/useAuthContext"

const Solutions = ({ solutions }) => {
  const { user } = useAuthContext()
  return (
    <>
      <Head>
        <title>FrontendPro - Solutions</title>
      </Head>
      <div className="mb-6 md:mb-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
        <Hero
          title="What's stopping you from moving forward? All the solutions you need are right here!"
          subTitle="Welcome To FrontendPro 😊"
          mainImg={solutionLottie}
          btnTitle="My Solutions "
          route={`${user?.reloadUserInfo.screenName}/my-solutions`}
          icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
          lottie
        />
        <main>
          <h1 className="text-5xl heading text-center font-extrabold text-white">
            Solutions
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
            {solutions?.map((solution) => {
              return <Card key={solution.id} card={solution} isSolution />
            })}
          </div>
        </main>
      </div>
    </>
  )
}

export default Solutions

export async function getServerSideProps() {
  const solutions = await getDocuments("solutions", ["completed", "==", true])

  return {
    props: {
      solutions,
    },
  }
}
