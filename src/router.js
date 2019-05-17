import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/notauthed/HomeComponent';
import TryItComponent from './components/notauthed/TryItComponent';
import SignInComponent from './components/notauthed/SignInComponent';
import RegisterComponent from './components/notauthed/RegisterComponent';
import NavbarComponent from './components/widgets/NavbarComponent';
import EmailActivationComponent from './components/notauthed/EmailActivationComponent';
import ContCreateComponent from './components/authorized/ContCreateComponent';
import NoMatchComponent from './components/notauthed/NoMatchComponent.js';
import Dashboard from './components/authorized/DashboardComponent';
import AuthRoute from './utils/auth';

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
          <AuthRoute path='/createcontainer' component={ContCreateComponent} />
          <AuthRoute path='/dashboard' component={Dashboard} />
          <Route component={NoMatchComponent} />
        </div>
      </Router>
    );
  }
}
export default ThetaRouter;