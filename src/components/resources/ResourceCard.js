import React from "react";

import { Image, Placeholder } from "cloudinary-react";
import Badge from "../smallComponents/Badge";

const ResourceCard = ({ resource }) => {
  return (
    <div className="group flex flex-col max-w-sm rounded-md shadow-3xl bg-gray-800 overflow-hidden transform translate-y-0 transition-transform duration-500 hover:-translate-y-4">
      <div className="">
        <Image
          className=""
          cloudName="di5hmgowi"
          alt={`${resource.title} website`}
          loading="lazy"
          public-id={resource.image}
        >
          <Placeholder type="pixelate" />
        </Image>
      </div>
      <div className="flex flex-col justify-between rounded-bl-md rounded-br-md">
        <div className="px-4 pt-4">
          {resource.tags.map((tag) => (
            <Badge key={tag} name={tag} badgeColor="purple" />
          ))}
        </div>
        <div className="card-content">
          <h2 className="font-semibold font-heading text-2xl text-white  px-4 pb-1 leading-6 cursor-pointer ">
            {resource.title}
          </h2>
          <p className="text-base text-gray-400  px-4 py-2">
            {resource.description}
          </p>
        </div>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button group-hover:text-white"
          aria-label={resource.title}
          title={`this is a link to ${resource.title} website`}
        >
          View Resource <i className="fas fa-external-link-alt ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
