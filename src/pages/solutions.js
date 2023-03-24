import Head from "next/head"

import Card from "../components/reusable/Card"
import { getDocuments } from "../firebase/firestore"
import Header from "../components/reusable/Header"

const Solutions = ({ solutions }) => {
  return (
    <>
      <Head>
        <title>FrontendPro - Solutions</title>
      </Head>
      <main>
        <Header
          title="Explore Solutions"
          description="Find solutions to frontend coding challenges submitted by fellow developers. Get inspired, learn new techniques and improve your skills. 🚀"
        />
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
            {solutions?.map((solution) => {
              return <Card key={solution.id} card={solution} isSolution />
            })}
          </div>
        </section>
      </main>
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
