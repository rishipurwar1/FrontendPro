import React, { useState } from "react"
import moment from "moment"
import { Helmet } from "react-helmet"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import rocketLoader from "../assets/animated_illustrations/rocketLoader.json"
import ChallengeHeader from "../components/challenges/ChallengeHeader"
import Avatar from "../components/reusable/Avatar"
import Button from "../components/reusable/Button"
import ButtonLink from "../components/reusable/ButtonLink"
import ConfettiWrapper from "../components/reusable/ConfettiWrapper"
import LottieAnimation from "../components/reusable/LottieAnimation"
import Modal from "../components/reusable/Modal"
import EmojiSection from "../components/solutions/EmojiSection"
import ShowWebsite from "../components/solutions/ShowWebsite"
import SolutionComments from "../components/solutions/SolutionComments"
import Icons from "../components/SvgIcons/Icons"
// custom hooks
import { useAuthContext } from "../hooks/useAuthContext"
import { useDocument } from "../hooks/useDocument"
import { useFirestore } from "../hooks/useFirestore"

const SolutionDetail = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const { document } = useDocument("solutions", id)
  const { user } = useAuthContext()

  const { deleteDocument, response } = useFirestore("solutions")

  const handleDelete = async () => {
    await deleteDocument(id)
    setIsOpen(false)
    navigate("/")
  }

  if (!document)
    return (
      <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
        <LottieAnimation animationDataFile={rocketLoader} />
      </div>
    )
  return (
    <>
      <Helmet>
        <title>FrontendPro Solution - {document.title}</title>
      </Helmet>
      <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3 mb-4">
        {state && <ConfettiWrapper />}
        <ChallengeHeader doc={document} button />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar photoURL={document.photoURL} className="ring-gray-700" />
            <div className="flex flex-col ml-3">
              <span className="text-navItem text-sm text-gray-300">
                {document.author}
              </span>
              <span className="text-navItem text-xs text-gray-400">
                {moment(document.createdAt.toDate()).fromNow()}
              </span>
            </div>
          </div>
          {user && user.uid === document.userID && (
            <div className="flex">
              <ButtonLink
                to={`/solution/${document.id}/edit`}
                size="square"
                variant="outline"
                className="text-gray-400 hover:text-white mr-2"
              >
                <Icons.Edit size={18} />
              </ButtonLink>
              <Button
                size="square"
                variant="outline"
                className="text-gray-400 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icons.Delete size={18} />
              </Button>
            </div>
          )}
        </div>
        <ShowWebsite
          url={document?.liveWebsiteUrl}
          github={document?.githubUrl}
          title={document?.title}
          isPlayground={document?.isPlayground}
        />
        <div className="grid grid-col-1 md:grid-cols-[1fr_160px] items-start gap-x-5 mt-10">
          <SolutionComments />
          <EmojiSection />
        </div>
      </div>
      {isOpen && (
        <Modal
          body={
            <>
              <Icons.Delete className="text-gray-500 mb-3.5 mx-auto" size={44} />
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this solution?
              </p>
            </>
          }
          footer={
            <>
              <Button variant="outline" size="medium" onClick={() => setIsOpen(false)}>
                No, cancel
              </Button>
              <Button
                variant="danger"
                size="medium"
                onClick={handleDelete}
                loading={response.isPending}
              >
                Yes, I&apos;m sure
              </Button>
            </>
          }
          setIsOpen={setIsOpen}
          id={document.id}
        />
      )}
    </>
  )
}

export default SolutionDetail
