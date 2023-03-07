import Link from "next/link"
import moment from "moment"

import { trimString } from "../../utils/shared"
import DifficultyBar from "../challenges/DifficultyBar"
import Badge from "../reusable/Badge"
import Icons from "../SvgIcons/Icons"

import Avatar from "./Avatar"
import BlurImage from "./BlurImage"

const Card = ({ card, isChallenge, isSolution }) => {
  let href = ""
  if (isChallenge && !isSolution) {
    href = `/challenge/${card.id}`
  } else if (!isChallenge && isSolution) {
    href = `/solution/${card.id}`
  } else if (!isChallenge && !isSolution) {
    href = card.link
  } else {
    href = card?.isPlayground ? `/playground/${card.id}` : `/submit/${card.id}`
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
          <BlurImage
            imageSrc={`${process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT}/${card.images.cover}`}
            imageAlt={`${card.title} website`}
          />
        </a>
      ) : (
        <Link href={href} className="block overflow-hidden group mb-4 rounded-lg">
          <BlurImage
            imageSrc={`${process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT}/${card.images.cover}`}
            imageAlt={`${card.title} Frontend Challenge`}
          />
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
          <Link href={href}>{card.title}</Link>
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
              {moment(card.createdAt).fromNow()}
            </span>
          </div>
        </div>
      )}
      {/* Solution submit card */}
      {isSolution && isChallenge && (
        <Link
          href={href}
          className="inline-flex items-center justify-center font-medium text-blue-600 group"
        >
          Submit Solution
          <Icons.ArrowRight className="ml-2 transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </article>
  )
}

export default Card
