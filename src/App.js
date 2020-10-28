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

const App = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <div className="relative">
              <SideBar />
              <Switch >
                <Route exact path="/" component={Dashboard} />
                <Route path="/challenges" component={ ChallengesList } />
                <Route path='/challenge/:id' component={ChallengeDetails} />
                <Route path="/resources" component={ Resources } />
                <Route path="/roadmaps" component={ Roadmaps } />
                <Route path="/solutions" component={ SolutionList } />
                <Route path="/solution/:id" component={ SolutionDetails } />
                <Route path="/create" component={ SolutionForm } />
              </Switch>
            </div>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
