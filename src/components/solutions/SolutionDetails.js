import React, { useState } from "react"
import { Helmet } from "react-helmet"
import useFirestore from "../../hooks/useFirestore"
import moment from "moment"
import ShowWebsite from "./ShowWebsite"
import { Link } from "react-router-dom"
import ChallengeHeader from "../challenges/ChallengeHeader"
import ConfirmationModal from "../smallComponents/ConfirmationModal"
import { useAuth } from "../../context/AuthContext"
import LottieAnimation from "../smallComponents/LottieAnimation"
import rocketLoader from "../../assets/animated_illustrations/loader.json"

const SolutionDetails = (props) => {
  const id = props.match.params.id
  const { docs } = useFirestore("solutions", id)
  const { currentUser } = useAuth()
  const [modal, setModal] = useState(false)

  if (docs.length === 0)
    return (
      <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
        <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
      </div>
    )

  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3 mb-4">
      <Helmet>
        <title>{`${docs[0].title} CODINGSPACE challenge solution by ${docs[0].author}`}</title>
      </Helmet>
      <ChallengeHeader docs={docs} button />
      {modal ? <ConfirmationModal setModal={setModal} docs={docs} /> : null}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center mt-4">
          <img
            className="rounded-full mr-1 w-12 border-purple-500 border-2"
            src={docs[0].photoURL}
            alt="user profile"
          />
          <div className="flex flex-col pl-1">
            <span className="text-navItem text-sm text-gray-300">{docs[0].author}</span>
            <span className="text-navItem text-xs text-gray-400">
              {moment(docs[0].createdAt.toDate()).startOf("day").fromNow()}
            </span>
          </div>
        </div>
        {currentUser && currentUser.id === docs[0].userID ? (
          <div>
            <Link
              to={`/solution/${docs[0].id}/edit`}
              className="text-secondary cursor-pointer pr-3"
              aria-label={`${docs[0].title} edit`}
              title={`Link to ${docs[0].title} edit page`}
            >
              <i className="far fa-edit text-2xl"></i>
            </Link>
            <span
              className="text-red-700 cursor-pointer"
              onClick={() => setModal(!modal)}
            >
              <i className="far fa-trash-alt text-2xl"></i>
            </span>
          </div>
        ) : null}
      </div>
      <ShowWebsite
        url={docs[0].liveWebsiteUrl}
        github={docs[0].githubUrl}
        title={docs[0].title}
      />
    </div>
  )
}

export default SolutionDetails
