import ButtonLink from "../reusable/ButtonLink"
import Card from "../reusable/Card"
import Icons from "../SvgIcons/Icons"

const LatestResources = ({ resources }) => {
  return (
    <main className="mt-32 flex flex-col">
      <h2 className="text-5xl text-center text-white font-extrabold">
        Featured Resources
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8">
        {resources?.map((resource) => (
          <Card key={resource.id} card={resource} />
        ))}
      </div>
      <ButtonLink to="/resources" className="self-center">
        View more
        <Icons.ArrowRight className="ml-2 -mr-1" />
      </ButtonLink>
    </main>
  )
}

export default LatestResources
