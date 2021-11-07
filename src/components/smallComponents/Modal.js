import React from "react"
import SignedOutLinks from "../layouts/SignedOutLinks"

const Modal = ({ setShowModal, auth, emoji, title, children, header }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-full xl:ml-56">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="rounded-lg shadow-lg relative flex flex-col w-96 max-w-96 bg-gray-800 outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t">
              {header && header.length ? (
                <p className="text-gray-300 font-medium item-center text-l my-3 mx-4">
                  {header}
                </p>
              ) : null}
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-gray-300 h-6 w-6 text-2xl block">×</span>
              </button>
            </div>
            {title && title.length ? (
              <div className="p-6 pt-0 flex flex-col items-center">
                <p className="my-4 text-gray-300 text-lg font-heading font-semibold leading-relaxed text-center">
                  <span className="block" role="img" aria-label="Emoji">
                    {emoji}
                  </span>
                  {title}
                </p>
                {!auth && <SignedOutLinks bgColor="bg-gray-900" />}
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
