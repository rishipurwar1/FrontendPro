import React from "react"

const Spinner = () => {
  return (
    <div className="absolute top-2 left-1/2">
      <img
        className="w-20"
        src={require("../../assets/icons/loading.svg")}
        alt="loader"
      />
    </div>
  )
}

export default Spinner
