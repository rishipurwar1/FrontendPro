import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
import { useFirestore } from "../../hooks/useFirestore"

import Modal from "./Modal"

const DownloadButton = ({ color, document }) => {
  const [downloadingModal, setDownloadingModal] = useState(false)
  const { user } = useAuthContext()
  const { addDocument } = useFirestore("solutions")

  const solutionDetails = [document].map(({ id, ...r }) => {
    r.challengeID = id
    return r
  })

  const { documents } = useCollection(
    "solutions",
    null,
    null,
    null,
    user.uid,
    null,
    solutionDetails[0].challengeID
  )

  const downloadAssets = async () => {
    window.open(solutionDetails[0].challengeAssets, "_blank", "noopener,noreferrer")

    if (documents.length > 0) {
      setDownloadingModal(true)
    } else {
      setDownloadingModal(true)

      await addDocument({
        ...solutionDetails[0],
        author:
          user.displayName !== null ? user.displayName : user.reloadUserInfo.screenName,
        userID: user.uid,
        photoURL: user.photoURL,
        completed: false,
      })
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
      {downloadingModal && (
        <Modal
          auth
          setShowModal={setDownloadingModal}
          title="Thanks for downloading a Coding Space challenge."
          emoji="🙏"
        />
      )}
    </>
  )
}

export default DownloadButton
