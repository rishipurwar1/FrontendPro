import Lottie from "lottie-react"

const LottieAnimation = ({ animationDataFile, className = "w-24" }) => {
  return (
    <div className={`mx-auto ${className}`}>
      <Lottie animationData={animationDataFile} loop={true} />
    </div>
  )
}

export default LottieAnimation
