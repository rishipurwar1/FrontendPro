import React from "react"
import Button from "../smallComponents/Button"

function StarButton() {
  const handleClick = () => {
    location.href = "https://github.com/rishipurwar1/coding-space"
  }
  return (
    <Button
      bgColor={
        "bg-purple-800 transition-all  duration-200 bg-gradient-to-br hover:from-purple-500 hover:to-indigo-500"
      }
      handleClick={handleClick}
      disabled={false}
      name="Star us on GitHub"
      logo="far fa-star ml-2"
    />
  )
}
export default StarButton
