import React, { useState } from "react"

const AccordionItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <article className="border-2 border-gray-700 mb-4 bg-gray-800 rounded-lg">
      <header
        className={`flex justify-between items-center ${
          isActive && "bg-gray-700"
        } hover:bg-gray-700 p-5 md:px-8 cursor-pointer select-none`}
        onClick={handleToggle}
      >
        <h3 className="font-semibold text-xl text-gray-300">{faq.question}</h3>
        <svg
          className={`text-gray-300 w-7 h-7 flex-shrink-0 ml-2 sm:ml-0 ${
            isActive && "rotate-180"
          } transition-transform`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </header>
      <div
        className={`${
          isActive ? "h-auto block" : "h-0 hidden"
        } transition-[height] text-white border-t-2 py-5 border-gray-700`}
      >
        <p className="pl-8 pr-8">{faq.answer}</p>
      </div>
    </article>
  )
}

export default AccordionItem
