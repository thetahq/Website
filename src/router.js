import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import TryItComponent from './components/TryItComponent';
import SignInComponent from './components/SignInComponent';
import RegisterComponent from './components/RegisterComponent';
import NavbarComponent from './components/NavbarComponent';

class ThetaRouter extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent/>
        <div>
          {/* @todo change title */}
          <Route exact path='/' component={HomeComponent} />
          <Route path='/tryit' component={TryItComponent} />
          <Route path='/signin' component={SignInComponent} />
          <Route path='/register' component={RegisterComponent} />
        </div>
      </Router>
    );
  }
}
export default ThetaRouter;