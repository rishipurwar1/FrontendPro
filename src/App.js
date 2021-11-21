import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import { Helmet } from "react-helmet"

// custom components
import SideBar from "./components/layouts/SideBar"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import Feedback from "./components/feedback/Feedback"
import useGaTracker from "./hooks/useGaTracker"

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
  useGaTracker()
  return (
    <>
      <Helmet>
        <title>CODINGSPACE - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <div className="relative grid min-h-screen md:grid-cols-layout-tablet xl:grid-cols-layout-desktop grid-rows-layout-desktop md:gap-6">
        <Navbar />
        <SideBar />
        <Switch>
          <Suspense fallback={<div>Loading..</div>}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/challenges" component={ChallengesList} />
            <Route path="/challenge/:id" component={ChallengeDetails} />
            <Route path="/resources" component={Resources} />
            <Route path="/roadmaps" component={Roadmaps} />
            <Route path="/solutions" component={SolutionList} />
            <Route exact path="/solution/:id" component={SolutionDetails} />
            <Route path="/submit/:id" component={SolutionForm} />
            <Route path="/solution/:id/edit" component={SolutionEditForm} />
            <Route path="/mysolutions" component={MySolutions} />
          </Suspense>
        </Switch>
        <Feedback />
        <Footer />
      </div>
    </>
  )
}

export default App
