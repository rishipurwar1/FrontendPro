import React from "react";
import { Link } from "react-router-dom";
import DifficultyBar from "./DifficultyBar";
import { Image, Placeholder } from "cloudinary-react";
import Badge from "../smallComponents/Badge";

const ChallengeCard = ({ challenge, challengelist, btnTitle }) => {
  const link = challengelist
    ? "/challenge/" + challenge.id
    : "/submit/" + challenge.id;
  return (
    <div className="group bg-gray-800 shadow-2xl overflow-hidden rounded-md max-w-sm transform translate-y-0 transition-transform duration-500 hover:-translate-y-4">
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
          <Badge key={tag} name={tag} badgeColor="purple" />
        ))}
      </div>
      <div className="mb-4 card-content">
        <h3 className="font-semibold font-heading text-2xl text-white  px-4 leading-6 ">
          {challenge.title}
        </h3>
        <p className="text-base text-gray-400 px-4 py-4">
          {challenge.description}
        </p>
      </div>
      <DifficultyBar difficultyLevel={challenge.difficulty} />
      <Link
        to={link}
        className="card-button group-hover:text-white"
        title={`This is a link to ${challenge.title} challenge detail page`}
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default ChallengeCard;
