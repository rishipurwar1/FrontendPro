import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"
import { useFirestore } from "../../hooks/useFirestore"
import Icons from "../SvgIcons/Icons"

import Button from "./Button"
import Modal from "./Modal"

const DownloadButton = ({ document, variant }) => {
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
      <Button
        size="large"
        variant={variant || "secondary"}
        className="font-medium"
        onClick={() => downloadAssets()}
      >
        <Icons.ArrowDown className="mr-2 -ml-1" />
        Download
      </Button>
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
