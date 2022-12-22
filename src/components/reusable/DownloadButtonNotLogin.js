import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"
import Icons from "../SvgIcons/Icons"

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
        <Icons.ArrowDown className="mr-2 -ml-1" />
        Download
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
