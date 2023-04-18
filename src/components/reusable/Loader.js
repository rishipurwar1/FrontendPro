import { useState, useEffect, useCallback } from "react"
import Router from "next/router"

const Loader = () => {
  const [loading, setLoading] = useState(false)
  const [width, setWidth] = useState(0)

  const handleRouteChangeStart = useCallback(() => setLoading(true), [])
  const handleRouteChangeEnd = useCallback(() => {
    setLoading(false)
    setWidth(100)
  }, [])

  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChangeStart)
    Router.events.on("routeChangeComplete", handleRouteChangeEnd)
    Router.events.on("routeChangeError", handleRouteChangeEnd)

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart)
      Router.events.off("routeChangeComplete", handleRouteChangeEnd)
      Router.events.off("routeChangeError", handleRouteChangeEnd)
    }
  }, [handleRouteChangeStart, handleRouteChangeEnd])

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setWidth((oldWidth) => {
          const newWidth = oldWidth + Math.round(Math.random() * 10)
          return Math.min(newWidth, 90)
        })
      }, 100)
      return () => clearInterval(timer)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && width === 100) {
      const timer = setTimeout(() => {
        setWidth(0)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [loading, width])

  return (
    <div
      className={`fixed top-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-sm transition-width duration-100 ease-in-out ${
        loading ? "w-1/2" : "w-full"
      }`}
      style={{ width: `${width}%` }}
    />
  )
}

export default Loader
