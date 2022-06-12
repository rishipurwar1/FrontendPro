import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

// loader
import rocketLoader from "./assets/animated_illustrations/loader.json"
import Feedback from "./components/feedback/Feedback"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
// custom components
import SideBar from "./components/layouts/SideBar"
import LottieAnimation from "./components/reusable/LottieAnimation"
import ScrollToTop from "./components/reusable/ScrollToTop"
import { useAuthContext } from "./hooks/useAuthContext"
import useGaTracker from "./hooks/useGaTracker"

import "./App.css"

// lazy loading components
const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"))
const ChallengesList = React.lazy(() => import("./components/challenges/ChallengesList"))
const ChallengeDetails = React.lazy(() =>
  import("./components/challenges/ChallengeDetails")
)
const Resources = React.lazy(() => import("./components/resources/Resources"))
const Roadmaps = React.lazy(() => import("./components/roadmaps/Roadmaps"))
const SolutionList = React.lazy(() => import("./components/solutions/SolutionList"))
const SolutionDetails = React.lazy(() => import("./components/solutions/SolutionDetails"))
const SolutionForm = React.lazy(() => import("./components/solutions/SolutionForm"))
const SolutionEditForm = React.lazy(() =>
  import("./components/solutions/SolutionEditForm")
)
const MySolutions = React.lazy(() => import("./components/MySolutions/MySolutions"))

const App = () => {
  const { authIsReady, user } = useAuthContext()
  useGaTracker()
  return authIsReady ? (
    <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6">
      <Navbar />
      <SideBar />
      <Suspense
        fallback={
          <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
            <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
          </div>
        }
      >
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/challenges" element={<ChallengesList />} />
            <Route path="/challenge/:id" element={<ChallengeDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/solutions" element={<SolutionList />} />
            <Route path="/solution/:id" element={<SolutionDetails />} />
            <Route
              path="/submit/:id"
              element={user ? <SolutionForm /> : <Navigate to="/" />}
            />
            <Route
              path="/solution/:id/edit"
              element={user ? <SolutionEditForm /> : <Navigate to="/" />}
            />
            <Route
              path="/mysolutions"
              element={user ? <MySolutions /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ScrollToTop>
      </Suspense>
      <Feedback />
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
    </div>
  )
}

export default App
