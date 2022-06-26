import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import { Link } from "react-router-dom"

import Badge from "../reusable/Badge"

import DifficultyBar from "./DifficultyBar"

const ChallengeCard = ({ challenge, challengelist, btnTitle }) => {
  const link = challengelist ? "/challenge/" + challenge.id : "/submit/" + challenge.id
  return (
    <div className="flex flex-col bg-gray-800 shadow-2xl overflow-hidden rounded-md max-w-sm transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102">
      <Image
        className="max-h-50"
        cloudName="di5hmgowi"
        alt={`${challenge.title} Challenge`}
        loading="lazy"
        public-id={challenge.images.cover}
      >
        <Placeholder type="pixelate" />
      </Image>
      <div className="p-4 pb-2">
        {challenge.tags.map((tag) => (
          <Badge key={tag} name={tag} badgeColor="text-purple-200 bg-purple-500" />
        ))}
      </div>
      <div className="flex-1 mb-4 card-content">
        <h3 className="font-semibold font-heading text-2xl text-white px-4 leading-6">
          {challenge.title}
        </h3>
        <p className="text-base text-gray-400 px-4 py-4">{challenge.description}</p>
      </div>
      <DifficultyBar difficultyLevel={challenge.difficulty} />
      <Link
        to={link}
        className="block rounded-t-none mt-4 w-full bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-semibold font-heading text-lg text-center px-5 py-5"
        title={`This is a link to ${challenge.title} challenge detail page`}
      >
        {btnTitle}
      </Link>
    </div>
  )
}

export default ChallengeCard
