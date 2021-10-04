import React from "react"
import { Image, Placeholder, Transformation } from "cloudinary-react"

const ContributorProfile = (props) => {
  const { name, profilePhoto, title, socialLink } = props.contributor

  return (
    <div className="flex flex-row items-center mt-3 ">
      <div className="w-12 sm:w-14 mr-4">
        <Image
          className="shadow rounded-full max-w-full h-auto border-none"
          alt={`Challenge`}
          cloudName="di5hmgowi"
          public-id={`${profilePhoto}`}
        >
          <Placeholder type="pixelate" />
          <Transformation crop="fill" />
        </Image>
      </div>
      <div className="flex flex-col">
        <a href={socialLink} className="hover:underline">
          <p className="text-base sm:text-lg">{name}</p>
        </a>
        <p className="text-xs sm:text-sm text-gray-300">{title}</p>
      </div>
    </div>
  )
}

export default ContributorProfile
