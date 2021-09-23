import React from "react"
import { useSolution } from "../../hooks/useFirestore"

const ConfirmationModal = ({ setModal, docs }) => {
  const { deleteSolution } = useSolution("solutions")
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-200 bg-opacity-10 pl-56"
      onClick={() => setModal(false)}
    >
      <div className="shadow-lg rounded-2xl p-4 z-50 bg-gray-800 w-64 m-auto">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <i className="fas fa-trash-alt"></i>
            <p className="text-gray-200 text-xl font-bold mt-4">Remove solution</p>
            <p className="text-gray-200 text-xs py-2 px-6">
              Are you sure you want to delete this solution ?
            </p>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() => deleteSolution(docs[0])}
              >
                Delete
              </button>
              <button
                type="button"
                className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
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
