import React from "react"
import { useNavigate } from "react-router-dom"

import { useFirestore } from "../../hooks/useFirestore"

const ConfirmationModal = ({ setModal, id }) => {
  const navigate = useNavigate()

  const { deleteDocument } = useFirestore("solutions")
  const handleDelete = () => {
    setModal(false)
    deleteDocument(id)
    navigate("/")
  }

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-0 outline-none focus:outline-none bg-gray-200 bg-opacity-10 pl-56"
      onClick={() => setModal(false)}
    >
      <div className="shadow-lg rounded-2xl p-4 z-50 bg-gray-800 w-auto max-w-sm m-auto">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <i className="fas fa-trash-alt text-gray-300"></i>
            <p className="text-gray-300 text-xl font-bold mt-4">Remove solution</p>
            <p className="text-gray-400 text-lg font-heading leading-relaxed text-center py-2 px-6">
              Are you sure you want to delete this solution ?
            </p>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
              <button
                type="button"
                className="py-2 px-4 bg-purple-800 transition-colors duration-200 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500 text-white w-full text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-white hover:bg-gray-200 text-purple-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
