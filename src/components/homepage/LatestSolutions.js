import { useCollection } from "../../hooks/useCollection"
import Card from "../reusable/Card"
import SkeletonSolutionSummaryCard from "../skeletons/SkeletonSolutionSummaryCard"

const LatestSolutions = () => {
  const { documents, isLoading } = useCollection(
    "solutions",
    ["completed", "==", true],
    6,
    ["createdAt", "desc"]
  )

  return (
    <main className="mt-16">
      <h2 className="text-5xl text-center text-white font-bold font-heading">
        Latest Solutions
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        {!isLoading
          ? documents.map((solution) => {
              return <Card key={solution.id} card={solution} isSolution />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonSolutionSummaryCard key={n} />)}
      </div>
    </main>
  )
}

export default LatestSolutions
