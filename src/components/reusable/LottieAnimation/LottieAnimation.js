import { useLottie } from "lottie-react"

// const style = {
//   height: 420,
//   width: 420,
// }

export const LottieAnimation = ({
  animationDataFile,
  height = 320,
  width = 420,
  ...styles
}) => {
  const options = {
    animationData: animationDataFile,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const { View } = useLottie(options, { height, width, ...styles })

  return View
}
