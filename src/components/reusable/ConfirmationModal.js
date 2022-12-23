import React from "react"
import { useNavigate } from "react-router-dom"

import { useFirestore } from "../../hooks/useFirestore"
import Icons from "../SvgIcons/Icons"

import Button from "./Button"

const ConfirmationModal = ({ setIsOpen, id }) => {
  const navigate = useNavigate()

  const { deleteDocument, response } = useFirestore("solutions")

  const handleDelete = async () => {
    await deleteDocument(id)
    setIsOpen(false)
    navigate("/")
  }

  return (
    <div
      id="deleteModal"
      className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full inset-0 h-full"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center rounded-lg shadow bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="deleteModal"
          >
            <Icons.Cross size={18} />
            <span className="sr-only">Close modal</span>
          </button>
          <Icons.Delete className="text-gray-500 mb-3.5 mx-auto" size={44} />
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this solution?
          </p>
          <div className="flex justify-center items-center space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
