import React from "react"

import { Widget } from "@typeform/embed-react"

const Newsletter = () => {
  return (
    <Widget
      id={process.env.REACT_APP_FORM_ID}
      className="my-form w-full mt-20"
      height="500"
    />
  )
}

export default Newsletter
