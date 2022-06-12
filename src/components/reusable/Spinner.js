import React from "react"

import Loader from "../../assets/icons/loading.svg"

const Spinner = () => {
  return (
    <div className="absolute top-2 left-1/2">
      <img className="w-20" src={Loader} alt="loader" />
    </div>
  )
}

export default Spinner
