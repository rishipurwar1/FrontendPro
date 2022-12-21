import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import moment from "moment"
import { Link } from "react-router-dom"

import { trimString } from "../../utils/shared"
import DifficultyBar from "../challenges/DifficultyBar"
import Badge from "../reusable/Badge"

import Avatar from "./Avatar"

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
    <article className="bg-gray-800 overflow-hidden rounded-lg border border-gray-700 p-4 shadow-sm transition hover:shadow-primary cursor-default">
      {/* resource card link */}
      {!isChallenge && !isSolution ? (
        <a
          href={card.link}
          className="block overflow-hidden group mb-4 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-lg h-64 transition duration-500 group-hover:scale-105"
            cloudName="di5hmgowi"
            alt={`${card.title} website`}
            loading="lazy"
            public-id={card.images.cover}
          >
            <Placeholder type="pixelate" />
          </Image>
        </a>
      ) : (
        <Link to={href} className="block overflow-hidden group mb-4 rounded-lg">
          <Image
            className="rounded-lg h-64 transition duration-500 group-hover:scale-105"
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
      <h3 className="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline hover:underline-offset-4">
        {/* resource card link */}
        {!isChallenge && !isSolution ? (
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            {card.title}
          </a>
        ) : (
          <Link to={href}>{card.title}</Link>
        )}
      </h3>
      <p className="font-light text-gray-400 mb-4">{trimString(card.description, 130)}</p>
      {/* Challenge card */}
      {isChallenge && !isSolution && <DifficultyBar difficultyLevel={card.difficulty} />}
      {/* Solution card */}
      {!isChallenge && isSolution && (
        <div className="flex items-center">
          <Avatar photoURL={card.photoURL} className="ring-gray-700" />
          <div className="flex flex-col ml-4">
            <span className="text-base text-white font-medium">{card.author}</span>
            <span className="text-navItem text-sm text-gray-400">
              {moment(card.createdAt.toDate()).fromNow()}
            </span>
          </div>
        </div>
      )}
      {/* Solution submit card */}
      {isSolution && isChallenge && (
        <Link
          to={href}
          className="inline-flex items-center font-medium text-blue-600 group"
        >
          Submit Solution
          <i className="fas fa-arrow-right ml-2 transition group-hover:translate-x-0.5"></i>
        </Link>
      )}
    </article>
  )
}

export default Card
