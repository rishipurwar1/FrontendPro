import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Tabs from "../../components/reusable/Tabs"
import { useAuthContext } from "../../hooks/useAuthContext"
import Header from "../../components/reusable/Header"

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
      <main>
        <Header
          title="Track Your Progress"
          description="Keep track of your in-progress and completed frontend challenges. Celebrate your achievements and level up your skills!"
          gradientClasses="bg-gradient-to-r from-amber-700 via-orange-300 to-rose-800"
        />
        <div className="rounded-lg bg-gray-900 border border-gray-700">
          {user && <Tabs userID={user.uid} />}
        </div>
      </main>
    </>
  )
}

export default MySolutions
