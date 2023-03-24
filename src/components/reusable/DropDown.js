import { useState } from "react"

import Icons from "../SvgIcons/Icons"

import Button from "./Button"

const DropDown = ({ setFigmaURL }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="absolute top-2 left-2">
      <Button
        size="normal"
        variant="primary"
        className="font-medium"
        onClick={() => setIsActive(!isActive)}
        id="options-menu"
      >
        Options
        {isActive ? (
          <Icons.ChevronUp className="-mr-1 ml-2 mt-1" />
        ) : (
          <Icons.ChevronDown className="-mr-1 ml-2 mt-1" />
        )}
      </Button>
      {isActive && (
        <div
          id="dropdownButton"
          className="z-40 divide-y divide-gray-100 rounded-lg shadow bg-gray-700 mt-2"
        >
          <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownButton">
            <li>
              <button
                onClick={() => {
                  setFigmaURL(0)
                  setIsActive(false)
                }}
                className="inline-flex items-center text-left text-sm text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white w-full focus:outline-none"
              >
                <Icons.Desktop className="mr-2" size={18} />
                Desktop
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setFigmaURL(1)
                  setIsActive(false)
                }}
                className="inline-flex items-center text-left text-sm text-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white w-full focus:outline-none"
              >
                <Icons.Phone className="mr-2" size={18} />
                Mobile
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
