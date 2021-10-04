import React, { useState } from "react"

const DropDown = ({ setFigmaURL }) => {
  const [isActive, setActive] = useState(false)
  return (
    <div className="absolute top-2 left-2">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setActive(!isActive)}
            type="button"
            className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Options
            {isActive ? (
              <i className="fas fa-chevron-up -mr-1 ml-2 mt-1"></i>
            ) : (
              <i className="fas fa-chevron-down -mr-1 ml-2 mt-1"></i>
            )}
          </button>
        </div>
        {isActive ? (
          <div className="origin-top-right absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => {
                  setFigmaURL(0)
                  setActive(!isActive)
                }}
                className="block text-left pl-3 py-2 text-sm text-gray-300 hover:bg-purple-500 hover:text-white w-full focus:outline-none"
                role="menuitem"
              >
                <i className="fas fa-desktop pr-2"></i>
                Desktop
              </button>
              <button
                onClick={() => {
                  setFigmaURL(1)
                  setActive(!isActive)
                }}
                className="block text-left pl-3 py-2 text-sm text-gray-300 hover:bg-purple-500 hover:text-white w-full focus:outline-none"
                role="menuitem"
              >
                <i className="fas fa-mobile-alt pr-2"></i>
                Mobile
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default DropDown
