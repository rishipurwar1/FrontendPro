import Badge from "../reusable/Badge"

const DifficultyBar = ({ difficultyLevel }) => {
  let middleColor = "bg-gray-500"
  let lastColor = "bg-gray-500"
  let badgeColor = "text-amber-800 bg-amber-200"
  if (difficultyLevel === "Intermediate") {
    middleColor = "bg-green-200"
    badgeColor = "text-green-800 bg-green-200"
  } else if (difficultyLevel === "Hard") {
    middleColor = "bg-green-200"
    lastColor = "bg-red-200"
    badgeColor = "text-fuchsia-800 bg-fuchsia-200"
  }
  return (
    <div className="relative">
      <Badge badgeColor={badgeColor} name={difficultyLevel} />
      <div className="overflow-hidden h-2 mt-4 flex bg-transparent">
        <div
          style={{ width: "33%" }}
          className="flex flex-col text-center whitespace-nowrap rounded justify-center bg-amber-200"
        ></div>
        <div
          style={{ width: "33%" }}
          className={`flex flex-col text-center rounded whitespace-nowrap justify-center ${middleColor} mx-1`}
        ></div>
        <div
          style={{ width: "34%" }}
          className={`flex flex-col text-center rounded whitespace-nowrap justify-center ${lastColor}`}
        ></div>
      </div>
    </div>
  )
}

export default DifficultyBar
