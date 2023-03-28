import { useState } from "react"

import Icons from "../SvgIcons/Icons"

const AccordionItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <article className="border border-gray-700 mb-4 bg-gray-800 rounded-lg overflow-hidden">
      <header
        className={`flex justify-between items-center ${
          isActive && "bg-gray-700"
        } hover:bg-gray-700 p-5 md:px-8 cursor-pointer select-none`}
        onClick={handleToggle}
      >
        <h3 className="font-medium text-gray-300">{faq.question}</h3>
        <Icons.ChevronDown
          className={`text-gray-300 flex-shrink-0 ml-2 sm:ml-0 transition-transform ${
            isActive && "rotate-180"
          }`}
        />
      </header>
      <div
        className={`${
          isActive ? "h-auto block" : "h-0 hidden"
        } transition-[height] text-gray-300 font-light border-t-2 py-5 border-gray-700`}
      >
        <p className="px-8">{faq.answer}</p>
      </div>
    </article>
  )
}

export default AccordionItem
