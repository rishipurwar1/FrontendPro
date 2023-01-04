import { useCollection } from "../../hooks/useCollection"
import ButtonLink from "../reusable/ButtonLink"
import Card from "../reusable/Card"
import SkeletonCard from "../skeletons/SkeletonCard"
import Icons from "../SvgIcons/Icons"

const LatestSolutions = () => {
  const { documents, isLoading } = useCollection(
    "solutions",
    ["completed", "==", true],
    6,
    ["createdAt", "desc"]
  )

  return (
    <main className="mt-20 flex flex-col">
      <h2 className="text-5xl text-center text-white font-extrabold">Latest Solutions</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8">
        {!isLoading
          ? documents.map((solution) => {
              return <Card key={solution.id} card={solution} isSolution />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard isSolution key={n} />)}
      </div>
      <ButtonLink to="/solutions" className="self-center">
        View more
        <Icons.ArrowRight className="ml-2 -mr-1" />
      </ButtonLink>
    </main>
  )
}

export default LatestSolutions
