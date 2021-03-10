import React from "react";
import SignedOutLinks from "../layouts/SignedOutLinks";

const Modal = ({ setShowModal, downloadingModal, emoji, title }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                    </span>
              </button>
            </div>
            {/*body*/}
            <div className="p-6 pt-0 flex flex-col items-center">
              <p className="my-4 text-gray-900 text-lg font-heading font-semibold leading-relaxed text-center">
                <span className="block" role="img" aria-label="Emoji">{emoji}</span>{title}</p>
              {!downloadingModal ? <SignedOutLinks bgColor="bg-gray-900" /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal;