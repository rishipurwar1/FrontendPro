import React, { useEffect, useState } from "react"
import Lottie from "react-lottie"
import PropTypes from "prop-types"
import { generateLottieOptions } from "../../utils"

export const LottieAnimation = React.memo(
  ({ animationDataFile, height = 420, width = 420 }) => {
    const [options, setOptions] = useState(null)
    useEffect(() => {
      animationDataFile &&
        setOptions(generateLottieOptions({ animationData: animationDataFile }))
    }, [animationDataFile])

    return (
      <>{options ? <Lottie height={height} width={width} options={options} /> : null}</>
    )
  }
)

LottieAnimation.propTypes = {
  animationDataFile: PropTypes.object.isRequired,
  height: PropTypes.number,
  weight: PropTypes.number,
}

LottieAnimation.displayName = "LottieAnimation"
