const Tooltip = ({ message, position = "bottom", children }) => {
  let positionClass = ""
  switch (position) {
    case "top":
      positionClass = "-top-10"
      break
    case "bottom":
      positionClass = "top-10"
      break
    case "left":
      positionClass = "-left-10"
      break
    case "right":
      positionClass = "right-10"
      break
  }

  return (
    <div className="group relative flex justify-center">
      {children}
      <span
        className={`absolute scale-0 transition-all rounded bg-gray-900 p-2 text-xs text-white group-hover:scale-100 z-10 whitespace-nowrap ${positionClass}`}
      >
        {message}
      </span>
    </div>
  )
}

export default Tooltip
