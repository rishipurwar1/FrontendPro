import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

//custom components
import SideBar from './components/layouts/SideBar'
import ChallengesList from './components/challenges/ChallengesList'
import Dashboard from './components/dashboard/Dashboard';
import Resources from './components/resources/Resources'
import Roadmaps from './components/roadmaps/Roadmaps';
import ChallengeDetails from './components/challenges/ChallengeDetails';
import { AuthProvider } from './context/AuthContext';
import SolutionForm from './components/solutions/SolutionForm';
import SolutionList from './components/solutions/SolutionList';
import SolutionDetails from './components/solutions/SolutionDetails';
import SolutionEditForm from './components/solutions/SolutionEditForm';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import MySolutions from './components/MySolutions/MySolutions';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="relative">
          <SideBar />
          <Navbar />
          <Switch >
            <Route exact path="/" component={Dashboard} />
            <Route path="/challenges" component={ChallengesList} />
            <Route path='/challenge/:id' component={ChallengeDetails} />
            <Route path="/resources" component={Resources} />
            <Route path="/roadmaps" component={Roadmaps} />
            <Route path="/solutions" component={SolutionList} />
            <Route path="/solution/:id" component={SolutionDetails} />
            <Route path="/solution/:id/edit" component={SolutionEditForm} />
            <Route path="/solution/:id/edit" component={SolutionEditForm} />
            <Route path="/submit/:id" component={SolutionForm} />
            <Route path="/mysolutions" component={MySolutions} />
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
