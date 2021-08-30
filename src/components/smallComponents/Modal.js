import React from "react";
import SignedOutLinks from "../layouts/SignedOutLinks";

const Modal = ({ setShowModal, auth, emoji, title }) => {
  return (
    <>
      <div
        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 ml-56"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="rounded-lg shadow-lg relative flex flex-col w-96 max-w-96 bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black h-6 w-6 text-2xl block">
                  ×
                </span>
              </button>
            </div>
            <div className="p-6 pt-0 flex flex-col items-center">
              <p className="my-4 text-gray-900 text-lg font-heading font-semibold leading-relaxed text-center">
                <span className="block" role="img" aria-label="Emoji">{emoji}</span>{title}</p>
              {!auth && <SignedOutLinks bgColor="bg-gray-900" />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;