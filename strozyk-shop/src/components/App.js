import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './LandingPage/LandingPage';
import Shop from './Shop/Shop';
import AboutMe from './AboutMe/AboutMe'
import Contact from './Contact/Contact'

const NotFound = () => <div>' :C '</div>;
function App() {
  return (
      <HashRouter>

          <Switch>
              <Route exact path = {'/'} component={LandingPage}/>
              <Route path = {'/shop'} component={Shop}/>
              <Route path = {'/about_me'} component={AboutMe}/>
              <Route path = {'/contact'} component={Contact}/>
              <Route component={NotFound}/>
          </Switch>
      </HashRouter>
  );
}

export default App;
