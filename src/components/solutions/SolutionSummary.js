import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Image, Placeholder } from "cloudinary-react";

const SolutionSummary = ({ solution }) => {
  return (
    <div className=" max-w-sm h-auto rounded overflow-hidden shadow-2xl transform translate-y-0 transition-transform duration-500 hover:-translate-y-4">
      <Image
        cloudName="di5hmgowi"
        loading="lazy"
        height="270"
        public-id={solution.images.cover}
        alt={`${solution.title}`}
      >
        <Placeholder type="pixelate" />
      </Image>
      <div className="group solution-card flex flex-col justify-between bg-gray-800 ">
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2 text-white ">
            {solution.title}
          </div>
        </div>
        <div>
          <div className="flex items-center px-6 pb-3">
            <img
              className="rounded-full mr-1 w-12"
              src={solution.photoURL}
              alt="Profile"
            />
            <div className="flex flex-col pl-1">
              <span className="text-navItem text-sm text-gray-300 ">
                {solution.author}
              </span>
              <span className="text-navItem text-xs text-gray-400 ">
                {moment(solution.createdAt.toDate()).startOf("day").fromNow()}
              </span>
            </div>
          </div>
          <Link
            to={"/solution/" + solution.id}
            className="card-button group-hover:text-white"
            aria-label={`${solution.title} website details page`}
            title={`Link to ${solution.title} details page`}
          >
            View Solution
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionSummary;
