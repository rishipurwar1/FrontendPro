import Image from "next/image"

const ChallengeDescription = ({ solution }) => {
  return (
    <div className="bg-gray-800 h-full px-4 py-2 overflow-y-auto no-scrollbar">
      <h1 className="font-bold text-xl text-white mb-2">{solution?.title}</h1>
      <p className="text-sm text-gray-300 mb-4">{solution?.description}</p>
      <div className="relative aspect-[4/3]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT}/${
            solution?.images?.desktop || solution?.images?.cover
          }`}
          width={400}
          height={300}
          className="w-full"
          alt={`${solution?.title} Challenge`}
        />
      </div>
      <h2 className="mt-4 mb-2 text-white text-lg font-semibold">
        Challenge Requirements
      </h2>
      <ul className="text-sm text-gray-300 list-disc pl-4">
        {solution.requirements.map((requirement, index) => (
          <li key={index} className="mb-1">
            {requirement}
          </li>
        ))}
        <li>Show the hover state of all the elements.</li>
        <li>
          The component should be responsive and display correctly on different screen
          sizes.
        </li>
        <li>Make this landing page look as close to the design as possible.</li>
      </ul>
      {solution?.bonus && (
        <>
          <h2 className="mt-4 mb-2 text-white text-lg font-semibold">Brownie Points</h2>
          <ul className="text-sm text-gray-300 list-disc pl-4">
            {solution?.bonus?.map((bonus, index) => (
              <li key={index} className="mb-1">
                {bonus}
              </li>
            ))}
          </ul>
        </>
      )}
      {solution?.resources && (
        <>
          <h2 className="mt-4 mb-2 text-white text-lg font-semibold">Resources</h2>
          <ul className="text-sm text-gray-300 list-disc pl-4">
            {solution.resources.map((resource, index) => (
              <li key={index} className="mb-1">
                <a
                  href={resource.link}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ChallengeDescription
