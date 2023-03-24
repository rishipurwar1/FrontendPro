import ButtonLink from "../reusable/ButtonLink"
import Card from "../reusable/Card"
import Icons from "../SvgIcons/Icons"

const Challenges = ({ challenges }) => {
  return (
    <section className="mt-32 flex flex-col">
      <h2 className="text-5xl text-center text-white font-extrabold">
        Featured Challenges
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8">
        {challenges?.map((challenge) => {
          return <Card key={challenge.id} card={challenge} isChallenge />
        })}
      </div>
      <ButtonLink to="/frontend-coding-challenges" className="self-center">
        View more
        <Icons.ArrowRight className="ml-2 -mr-1" />
      </ButtonLink>
    </section>
  )
}

export default Challenges
