import React, { useState } from "react"

import { useAuthContext } from "../../hooks/useAuthContext"

import Modal from "./Modal"

const DownloadButtonNotLogin = ({ color }) => {
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuthContext()

  return (
    <>
      <button
        className={`${color} text-gray-300 font-semibold shadow-md py-3 px-5 rounded-xl text-base focus:outline-none block w-48`}
        onClick={() => setShowModal(true)}
      >
        <i className="animate-bounce fas fa-arrow-down mr-2"></i>Download
      </button>
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
