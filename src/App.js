import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import ReactGA from "react-ga"

// custom components
import SideBar from "./components/layouts/SideBar"
import ChallengesList from "./components/challenges/ChallengesList"
import Dashboard from "./components/dashboard/Dashboard"
import Resources from "./components/resources/Resources"
import Roadmaps from "./components/roadmaps/Roadmaps"
import ChallengeDetails from "./components/challenges/ChallengeDetails"
import { AuthProvider } from "./context/AuthContext"
import SolutionForm from "./components/solutions/SolutionForm"
import SolutionList from "./components/solutions/SolutionList"
import SolutionDetails from "./components/solutions/SolutionDetails"
import SolutionEditForm from "./components/solutions/SolutionEditForm"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import MySolutions from "./components/MySolutions/MySolutions"
import Feedback from "./components/feedback/Feedback"

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY)

    // to report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6">
          <Navbar />
          <SideBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/challenges" component={ChallengesList} />
            <Route path="/challenge/:id" component={ChallengeDetails} />
            <Route path="/resources" component={Resources} />
            <Route path="/roadmaps" component={Roadmaps} />
            <Route path="/solutions" component={SolutionList} />
            <Route exact path="/solution/:id" component={SolutionDetails} />
            <Route path="/solution/:id/edit" component={SolutionEditForm} />
            <Route path="/submit/:id" component={SolutionForm} />
            <Route path="/mysolutions" component={MySolutions} />
          </Switch>
          <Feedback />
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
