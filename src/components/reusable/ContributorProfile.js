import Avatar from "./Avatar"

const ContributorProfile = (props) => {
  const { name, profilePhoto, title, socialLink } = props.contributor

  return (
    <div className="flex flex-row items-center mt-3 ">
      <div className="mr-4">
        <Avatar
          photoURL={`${process.env.NEXT_PUBLIC_CLOUDINARY_ENDPOINT}/${profilePhoto}`}
        />
      </div>
      <div className="flex flex-col">
        <a
          href={socialLink}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-base sm:text-lg">{name}</p>
        </a>
        <p className="text-xs sm:text-sm text-gray-300">{title}</p>
      </div>
    </div>
  )
}

export default ContributorProfile
