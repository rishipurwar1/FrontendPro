import React from "react"

import Icons from "../SvgIcons/Icons"

const Modal = ({ body, footer, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div
      id="deleteModal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full inset-0 h-full"
    >
      <div
        className="bg-gray-200 bg-opacity-10 absolute inset-0 z-0"
        onClick={handleClick}
      ></div>
      <div
        className="relative p-4 w-full max-w-md h-full md:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-4 text-center rounded-lg shadow bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="deleteModal"
            onClick={handleClick}
          >
            <Icons.Cross size={18} />
            <span className="sr-only">Close modal</span>
          </button>
          {body && body}
          {footer && (
            <div className="flex justify-center items-center space-x-4">{footer}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
