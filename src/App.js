import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

//custom components
import SideBar from './components/layouts/SideBar'
import ChallengesList from './components/challenges/ChallengesList'
import Dashboard from './components/dashboard/Dashboard';
import Resources from './components/resources/Resources'
import Roadmaps from './components/roadmaps/Roadmaps';
import Solutions from './components/roadmaps/Solutions';
import ChallengeDetails from './components/challenges/ChallengeDetails';
import CreateChallenge from './components/form/CreateChallenge';
import { AuthProvider } from './context/AuthContext';

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
                <Route path="/solutions" component={ Solutions } />
                <Route path="/create" component={ CreateChallenge } />
              </Switch>
            </div>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
