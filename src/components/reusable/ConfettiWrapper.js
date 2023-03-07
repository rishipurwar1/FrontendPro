import React, { useCallback, useEffect, useRef } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
}

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    startVelocity: 45,
    origin: { x: originX },
  }
}

const ConfettiWrapper = () => {
  const refAnimationInstance = useRef(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  useEffect(() => {
    const start = Date.now()
    const duration = 5000
    let animationInterval

    const runAnimation = () => {
      const current = Date.now()
      const time = current - start

      if (time > duration) {
        clearInterval(animationInterval)
      } else {
        refAnimationInstance.current(getAnimationSettings(60, 0))
        refAnimationInstance.current(getAnimationSettings(120, 1))
      }
    }

    animationInterval = setInterval(runAnimation, 16)

    return () => {
      clearInterval(animationInterval)
    }
  }, [])

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
}

export default ConfettiWrapper
