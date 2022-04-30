import React, { useEffect, useState } from "react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

const ConfettiWrapper = () => {
  const { width, height } = useWindowSize()
  const [pieces, setPieces] = useState(200)
  useEffect(() => {
    setTimeout(() => setPieces(0), 5000)
  }, [])

  return <Confetti numberOfPieces={pieces} width={width} height={height} />
}

export default ConfettiWrapper
