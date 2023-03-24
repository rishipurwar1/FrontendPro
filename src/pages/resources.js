import Head from "next/head"

import Card from "../components/reusable/Card"
import { getDocuments } from "../firebase/firestore"
import Header from "../components/reusable/Header"

const Resources = ({ resources }) => {
  return (
    <>
      <Head>
        <title>FrontendPro - Resources</title>
      </Head>
      <main>
        <Header
          title="Explore Resources"
          description="Find the best resources and developer tools for frontend development here. Whether you're a beginner or a pro, we've got you covered. Start learning today!"
          gradientClasses="bg-gradient-to-r from-green-200 via-green-300 to-blue-500"
        />
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {resources?.map((resource) => {
              return <Card key={resource.id} card={resource} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Resources

export async function getStaticProps() {
  const resources = await getDocuments("resources")

  return {
    props: {
      resources,
    },
  }
}
