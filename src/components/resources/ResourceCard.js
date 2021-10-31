import React from "react"

import { Image, Placeholder } from "cloudinary-react"
import Badge from "../smallComponents/Badge"

const ResourceCard = ({ resource }) => {
  return (
    <div className="flex flex-col max-w-sm rounded-md shadow-3xl bg-gray-800 overflow-hidden transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-105">
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
      <div className="flex flex-col flex-1 justify-between rounded-bl-md rounded-br-md">
        <div className="px-4 pt-4">
          {resource.tags.map((tag) => (
            <Badge key={tag} name={tag} badgeColor="purple" />
          ))}
        </div>
        <div className="card-content">
          <h2 className="font-semibold font-heading text-2xl text-white px-4 pb-1 leading-6 cursor-pointer">
            {resource.title}
          </h2>
          <p className="text-base text-gray-400 px-4 py-2">{resource.description}</p>
        </div>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-t-none mt-4 w-full bg-gradient-to-br from-purple-500 to-indigo-500 text-purple-200 font-semibold font-heading text-lg text-center px-5 py-5"
          aria-label={resource.title}
          title={`this is a link to ${resource.title} website`}
        >
          View Resource <i className="fas fa-external-link-alt ml-2"></i>
        </a>
      </div>
    </div>
  )
}

export default ResourceCard
