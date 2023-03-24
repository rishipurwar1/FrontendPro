import Header from "../../components/reusable/Header"
import Card from "../../components/reusable/Card"
import { getDocuments } from "../../firebase/firestore"

const FrontendCodingChallenges = ({ challenges }) => {
  return (
    <main>
      <Header
        title="Frontend Coding Challenges"
        description="Take your Frontend coding skills to the next level with our curated collection
          of real-world frontend coding challenges. 🚀"
        gradientClasses="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      />
      <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {challenges?.map((challenge) => {
            return <Card key={challenge.id} card={challenge} isChallenge />
          })}
        </div>
      </section>
    </main>
  )
}

export default FrontendCodingChallenges

export async function getStaticProps() {
  const challenges = await getDocuments("challenges")

  return {
    props: {
      challenges,
    },
  }
}
