import React from "react"

import { faqs } from "../../utils/data"

import AccordionItem from "./AccordionItem"

const Accordion = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-16">
        <div className="w-full mx-auto md:px-4 mb-2">
          <h2 className="text-indigo-600 text-3xl md:text-4xl font-extrabold tracking-wide text-center lg:my-8">
            Frequently Asked Questions
          </h2>
          <section className="shadow-md overflow-hidden rounded-lg mt-6 sm:shadow-lg lg:mt-10 lg:mx-auto lg:max-w-4xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default Accordion
