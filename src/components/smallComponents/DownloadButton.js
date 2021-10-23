import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import useFirestore, { useSolution } from "../../hooks/useFirestore"
import Modal from "./Modal"

const DownloadButton = ({ color, challengeDetails }) => {
  const [showModal, setShowModal] = useState(false)
  const [downloadingModal, setDownloadingModal] = useState(false)
  const { currentUser } = useAuth()
  const { addSolution } = useSolution("solutions")
  const { docs = [] } = useFirestore("solutions", null, null, null, false)
  const downloadAssets = async () => {
    if (currentUser) {
      window.open(challengeDetails[0].challengeAssets, "_blank", "noopener,noreferrer")
      const currentUserSolution =
        docs.length > 0 &&
        docs
          .filter((doc) => doc.userID === currentUser.id)
          .filter((solution) => solution.challengeID === challengeDetails[0].challengeID)
      if (currentUserSolution.length > 0) {
        setDownloadingModal(true)
      } else {
        setDownloadingModal(true)
        await addSolution(...challengeDetails)
      }
    } else {
      setShowModal(true)
    }
  }
  return (
    <>
      <button
        className={`${color} text-gray-300 font-semibold shadow-md py-3 px-5 rounded-xl text-base focus:outline-none block w-48`}
        onClick={() => downloadAssets()}
      >
        <i className="animate-bounce fas fa-arrow-down mr-2"></i>Download
      </button>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          title="Oops! Look like you aren't logged in"
          emoji="😌"
        />
      ) : null}
      {downloadingModal ? (
        <Modal
          auth
          setShowModal={setDownloadingModal}
          title="Thanks for downloading a Coding Space challenge."
          emoji="🙏"
        />
      ) : null}
    </>
  )
}

export default DownloadButton
