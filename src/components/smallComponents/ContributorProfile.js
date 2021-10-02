import React from "react"

function ContributorProfile(props) {
  return (
    <div className="flex flex-row items-center mt-3 ">
      <div className=" w-12 sm:w-14 mr-4">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
          alt="..."
          className="shadow rounded-full max-w-full h-auto border-none"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-base sm:text-lg text-white">Corey Siphron</p>
        <p className="text-xs sm:text-sm text-gray-300">UI/UX Designer</p>
      </div>
    </div>
  )
}

export default ContributorProfile
