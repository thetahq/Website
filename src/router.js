import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import TryItComponent from './components/TryItComponent';
import SignInComponent from './components/SignInComponent';
import RegisterComponent from './components/RegisterComponent';
import NavbarComponent from './components/NavbarComponent';
import EmailActivationComponent from './component/EmailActivationComponent';

class ThetaRouter extends Component {
  render() {
    // @todo change title depending on current page
    return (
      <Router>
        <NavbarComponent/>
        <div>
          <Route exact path='/' component={HomeComponent} />
          <Route path='/tryit' component={TryItComponent} />
          <Route path='/signin' component={SignInComponent} />
          <Route path='/register' component={RegisterComponent} />
          <Route path='/activate/:email/:id' component={EmailActivationComponent}/>
        </div>
      </Router>
    );
  }
}
export default ThetaRouter;