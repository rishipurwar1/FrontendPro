const generateLottieOptions = ({ animationData, autoplay = true, loop = true }) => ({
  loop,
  autoplay,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
})

export default generateLottieOptions
