import React, { useState } from "react"

import Icons from "../SvgIcons/Icons"

import Button from "./Button"

const DropDown = ({ setFigmaURL }) => {
  const [isActive, setActive] = useState(false)
  return (
    <div className="absolute top-2 left-2">
      <div className="relative inline-block text-left">
        <div>
          <Button
            size="normal"
            variant="dark"
            className="font-medium"
            onClick={() => setActive(!isActive)}
            id="options-menu"
          >
            Options
            {isActive ? (
              <Icons.ChevronUp className="-mr-1 ml-2 mt-1" />
            ) : (
              <Icons.ChevronDown className="-mr-1 ml-2 mt-1" />
            )}
          </Button>
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
                className="inline-flex items-center text-left text-sm text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white w-full focus:outline-none"
                role="menuitem"
              >
                <Icons.Desktop className="mr-2" size={18} />
                Desktop
              </button>
              <button
                onClick={() => {
                  setFigmaURL(1)
                  setActive(!isActive)
                }}
                className="inline-flex items-center text-left text-sm text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white w-full focus:outline-none"
                role="menuitem"
              >
                <Icons.Phone className="mr-2" size={18} />
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
