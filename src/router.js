import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/notauthed/HomeComponent';
import TryItComponent from './components/notauthed/TryItComponent';
import SignInComponent from './components/notauthed/SignInComponent';
import RegisterComponent from './components/notauthed/RegisterComponent';
import NavbarComponent from './components/widgets/NavbarComponent';
import EmailActivationComponent from './components/notauthed/EmailActivationComponent';
import ContCreateComponent from './components/authorized/ContCreateComponent';
import Dashboard from './components/authorized/DashboardComponent';

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
          {/* @todo protected route */} <Route path='/createcontainer' component={ContCreateComponent} />
          {/* protected route */} <Route path='/dashboard' component={Dashboard} />
          {/* @todo 404 */}
        </div>
      </Router>
    );
  }
}
export default ThetaRouter;