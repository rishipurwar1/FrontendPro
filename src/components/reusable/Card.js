import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import moment from "moment"
import { Link } from "react-router-dom"

import { trimString } from "../../utils/shared"
import DifficultyBar from "../challenges/DifficultyBar"
import Badge from "../reusable/Badge"

const Card = ({ card, isChallenge, isSolution }) => {
  let href = ""
  if (isChallenge && !isSolution) {
    href = `/challenge/${card.id}`
  } else if (!isChallenge && isSolution) {
    href = `/solution/${card.id}`
  } else if (!isChallenge && !isSolution) {
    href = card.link
  } else {
    href = `/submit/${card.id}`
  }

  return (
    <article className="bg-gray-800 shadow-md overflow-hidden rounded-lg border border-gray-700 p-4 transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102 cursor-default">
      {!isChallenge && !isSolution ? (
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-lg mb-4"
            cloudName="di5hmgowi"
            alt={`${card.title} website`}
            loading="lazy"
            public-id={card.images.cover}
          >
            <Placeholder type="pixelate" />
          </Image>
        </a>
      ) : (
        <Link to={href}>
          <Image
            className="mb-4 rounded-lg"
            cloudName="di5hmgowi"
            alt={`${card.title} Challenge`}
            loading="lazy"
            public-id={card.images.cover}
          >
            <Placeholder type="pixelate" />
          </Image>
        </Link>
      )}
      <div>
        {card.tags.map((tag) => (
          <Badge key={tag} name={tag} badgeColor="text-indigo-800 bg-indigo-200" />
        ))}
      </div>
      <h3 className="font-bold text-2xl text-white tracking-tight my-2">
        {!isChallenge && !isSolution ? (
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            {card.title}
          </a>
        ) : (
          <Link to={href}>{card.title}</Link>
        )}
      </h3>
      <p className="font-light text-gray-400 mb-4">{trimString(card.description, 130)}</p>
      {isChallenge && !isSolution && <DifficultyBar difficultyLevel={card.difficulty} />}
      {!isChallenge && isSolution && (
        <div className="flex items-center">
          <img className="rounded-full w-10 h-10" src={card.photoURL} alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base text-white font-medium">{card.author}</span>
            <span className="text-navItem text-sm text-gray-400">
              {moment(card.createdAt.toDate()).fromNow()}
            </span>
          </div>
        </div>
      )}
      {isSolution && isChallenge && (
        <Link
          to={href}
          className="inline-flex items-center font-medium text-blue-600 hover:underline"
        >
          Submit Solution
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      )}
    </article>
  )
}

export default Card
