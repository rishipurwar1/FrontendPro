import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

//custom components
import SideBar from './components/layouts/SideBar'

function App() {
  return (
    <BrowserRouter>
        <div className="relative">
          <SideBar />
          <Switch >
            <Route exact path="/" component={Dashboard} />
            {/* <Route path="/project/:id" component={ ProjectDetails } /> */}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
