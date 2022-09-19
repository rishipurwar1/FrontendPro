import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

// loader
import rocketLoader from "./assets/animated_illustrations/loader.json"
import ChallengeDetails from "./components/challenges/ChallengeDetails"
// lazy loading components
import ChallengesList from "./components/challenges/ChallengesList"
import Dashboard from "./components/dashboard/Dashboard"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
// custom components
import SideBar from "./components/layouts/SideBar"
import MySolutions from "./components/MySolutions/MySolutions"
import Resources from "./components/resources/Resources"
import LottieAnimation from "./components/reusable/LottieAnimation"
import ScrollToTop from "./components/reusable/ScrollToTop"
import Roadmaps from "./components/roadmaps/Roadmaps"
import SolutionDetails from "./components/solutions/SolutionDetails"
import SolutionEditForm from "./components/solutions/SolutionEditForm"
import SolutionForm from "./components/solutions/SolutionForm"
import SolutionList from "./components/solutions/SolutionList"
import { useAuthContext } from "./hooks/useAuthContext"
import useGaTracker from "./hooks/useGaTracker"

import "./App.css"

const App = () => {
  const { authIsReady, user } = useAuthContext()
  useGaTracker()
  return authIsReady ? (
    <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6 xxl:max-w-screen-xxl mx-auto">
      <Navbar />
      <SideBar />
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
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
    </div>
  )
}

export default App
