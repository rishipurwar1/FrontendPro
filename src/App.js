import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

// loader
import rocketLoader from "./assets/animated_illustrations/rocketLoader.json"
// layout
import Layout from "./components/layouts/Layout"
import LottieAnimation from "./components/reusable/LottieAnimation"
// custom components
import ScrollToTop from "./components/reusable/ScrollToTop"
import { useAuthContext } from "./hooks/useAuthContext"
import Playground from "./pages/Playground"

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
  return (
    <>
      {authIsReady ? (
        <div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <LottieAnimation animationDataFile={rocketLoader} />
              </div>
            }
          >
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Homepage />} />
                  <Route path="challenges" element={<Challenges />} />
                  <Route path="challenge/:id" element={<ChallengeDetail />} />
                  <Route path="solutions" element={<Solutions />} />
                  <Route path="solution/:id" element={<SolutionDetail />} />
                  <Route path="resources" element={<Resources />} />
                  <Route path="roadmaps" element={<Roadmaps />} />
                  <Route
                    path="submit/:id"
                    element={user ? <SolutionForm /> : <Navigate to="/" />}
                  />
                  <Route
                    path="solution/:id/edit"
                    element={user ? <SolutionEditForm /> : <Navigate to="/" />}
                  />
                  <Route
                    path="mysolutions"
                    element={user ? <MySolutions /> : <Navigate to="/" />}
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
                <Route path="playground/:id" element={<Playground />} />
              </Routes>
            </ScrollToTop>
          </Suspense>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <LottieAnimation animationDataFile={rocketLoader} />
        </div>
      )}
    </>
  )
}

export default App
