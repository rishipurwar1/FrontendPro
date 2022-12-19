import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import moment from "moment"
import { Link } from "react-router-dom"

const SolutionCard = ({ solution }) => {
  return (
    <article className="bg-gray-800 shadow-md overflow-hidden rounded-lg border border-gray-700 p-4 transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102 cursor-default">
      <Link to={"/solution/" + solution.id}>
        <Image
          className="mb-4 rounded-lg"
          cloudName="di5hmgowi"
          loading="lazy"
          public-id={solution.images.cover}
          alt={`${solution.title}`}
        >
          <Placeholder type="pixelate" />
        </Image>
      </Link>
      <div className="flex flex-col justify-between bg-gray-800">
        <h3 className="font-semibold text-2xl text-white mb-4 font-body">
          <Link to={"/solution/" + solution.id}>{solution.title}</Link>
        </h3>
        <div>
          <div className="flex items-center">
            <img
              className="rounded-full w-10 h-10"
              src={solution.photoURL}
              alt="Profile"
            />
            <div className="flex flex-col ml-4">
              <span className="text-base text-white font-medium">{solution.author}</span>
              <span className="text-navItem text-sm text-gray-400">
                {moment(solution.createdAt.toDate()).fromNow()}
              </span>
            </div>
          </div>
          {/* <Link
            to={"/solution/" + solution.id}
            className="block rounded-t-none w-full bg-secondary text-white text-lg text-center px-5 py-4"
            aria-label={`${solution.title} website details page`}
            title={`Link to ${solution.title} details page`}
          >
            View Solution
          </Link> */}
        </div>
      </div>
    </article>
  )
}

export default SolutionCard
