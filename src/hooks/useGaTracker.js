import { useEffect, useState } from "react"
import ReactGA from "react-ga"
import { useLocation } from "react-router-dom"

const useGaTracker = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY)
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [initialized, location])
}

export default useGaTracker
