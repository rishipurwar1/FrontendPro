import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

// loader
import rocketLoader from "./assets/animated_illustrations/loader.json"
// layout
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import SideBar from "./components/layouts/SideBar"
// custom components
import LottieAnimation from "./components/reusable/LottieAnimation"
import ScrollToTop from "./components/reusable/ScrollToTop"
import { useAuthContext } from "./hooks/useAuthContext"

import "./App.css"

// lazy loading components
const Homepage = React.lazy(() => import("./pages/Homepage"))
const Challenges = React.lazy(() => import("./pages/Challenges"))
const ChallengeDetail = React.lazy(() => import("./pages/ChallengeDetail"))
const Solutions = React.lazy(() => import("./pages/Solutions"))
const SolutionDetail = React.lazy(() => import("./pages/SolutionDetail"))
const Resources = React.lazy(() => import("./pages/Resources"))
const Roadmaps = React.lazy(() => import("./pages/Roadmaps"))
const SolutionForm = React.lazy(() => import("./pages/SolutionForm"))
const SolutionEditForm = React.lazy(() => import("./pages/SolutionEditForm"))
const MySolutions = React.lazy(() => import("./pages/MySolutions"))

const App = () => {
  const { authIsReady, user } = useAuthContext()
  return authIsReady ? (
    <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6 xxl:max-w-screen-xxl mx-auto">
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
            <Route path="/" element={<Homepage />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenge/:id" element={<ChallengeDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solution/:id" element={<SolutionDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
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
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
    </div>
  )
}

export default App
