import { useCollection } from "../../hooks/useCollection"
import Card from "../reusable/Card"
import SkeletonResourceCard from "../skeletons/SkeletonResourceCard"

const LatestResources = () => {
  const { documents, isLoading } = useCollection("resources", null, 6, [
    "createdAt",
    "desc",
  ])

  return (
    <main className="mt-16">
      <h2 className="text-5xl text-center text-white font-bold font-heading">
        Latest Resources
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {!isLoading
          ? documents.map((resource) => <Card key={resource.id} card={resource} />)
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonResourceCard key={n} />)}
      </div>
    </main>
  )
}

export default LatestResources
