import React, { useState } from 'react'

const DropDown = ({ setFigmaURL }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <div className="relative inline-block text-left">
        <div>
          <button onClick={() => setActive(!isActive)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">Options<i className="fas fa-chevron-down -mr-1 ml-2 mt-1"></i></button>
        </div>

        {/* <!--
            Dropdown panel, show/hide based on dropdown state.
        
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
        {isActive ? (
          <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button onClick={() => {
                setFigmaURL(0);
                setActive(!isActive);
              }} className="block text-left pl-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full focus:outline-none" role="menuitem"><i className="fas fa-desktop pr-2"></i>Desktop</button>
              <button onClick={() => {
                setFigmaURL(1);
                setActive(!isActive);
              }} className="block text-left pl-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full focus:outline-none" role="menuitem"><i className="fas fa-mobile-alt pr-2"></i>Mobile</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>

  )
}

export default DropDown
