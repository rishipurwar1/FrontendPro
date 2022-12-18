import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import { Link } from "react-router-dom"

import { trimString } from "../../utils/shared"
import Badge from "../reusable/Badge"

import DifficultyBar from "./DifficultyBar"

const ChallengeCard = ({ challenge, challengelist, btnTitle }) => {
  const href = challengelist ? "/challenge/" + challenge.id : "/submit/" + challenge.id
  return (
    <article className="bg-gray-800 shadow-md overflow-hidden rounded-lg border border-gray-700 p-4 transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102 cursor-default">
      <Link to={href}>
        <Image
          className="mb-4 rounded-lg"
          cloudName="di5hmgowi"
          alt={`${challenge.title} Challenge`}
          loading="lazy"
          public-id={challenge.images.cover}
        >
          <Placeholder type="pixelate" />
        </Image>
      </Link>
      <div>
        {challenge.tags.map((tag) => (
          <Badge key={tag} name={tag} badgeColor="text-indigo-800 bg-indigo-200" />
        ))}
      </div>
      <h3 className="font-bold text-2xl text-white tracking-tight my-2">
        <Link to={href}>{challenge.title}</Link>
      </h3>
      <p className="font-light text-gray-400 mb-4">
        {trimString(challenge.description, 130)}
      </p>
      <DifficultyBar difficultyLevel={challenge.difficulty} />
    </article>
  )
}

export default ChallengeCard
