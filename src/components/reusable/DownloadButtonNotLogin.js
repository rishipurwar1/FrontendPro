import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"

import Button from "./Button"
import Modal from "./Modal"

const DownloadButtonNotLogin = ({ variant }) => {
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuthContext()

  return (
    <>
      <Button
        size="large"
        variant={variant || "secondary"}
        className="font-medium"
        onClick={() => setShowModal(true)}
      >
        <i className="animate-bounce fas fa-arrow-down mr-2"></i>Download
      </Button>
      {showModal && !user ? (
        <Modal
          setShowModal={setShowModal}
          title="Oops! Look like you aren't logged in"
          emoji="😌"
        />
      ) : null}
    </>
  )
}

export default DownloadButtonNotLogin
