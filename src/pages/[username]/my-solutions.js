import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import mainImg from "../../assets/animated_illustrations/solution_animation.json"
import Hero from "../../components/homepage/Hero"
import Tabs from "../../components/reusable/Tabs"
import Icons from "../../components/SvgIcons/Icons"
import { useAuthContext } from "../../hooks/useAuthContext"

const MySolutions = () => {
  const { user, authIsReady } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (authIsReady && user === null) router.push("/")
  }, [authIsReady])
  return (
    <>
      <Head>
        <title>FrontendPro - My Solutions</title>
      </Head>
      <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3 text-purple-50 min-h-screen">
        <Hero
          title="Here you can find all the solutions and ongoing challenges details."
          subTitle="Welcome To FrontendPro 😊"
          mainImg={mainImg}
          btnTitle="Explore Challenges"
          icon={<Icons.ArrowRight className="ml-2 -mr-1" />}
          route="/challenges"
        />
        <h2 className="text-5xl text-center text-white font-extrabold">My Solutions</h2>
        {user ? <Tabs userID={user.uid} /> : null}
      </div>
    </>
  )
}

export default MySolutions
