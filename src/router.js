import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import TryItComponent from './components/TryItComponent';

class ThetaRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeComponent} />
          <Route path='/tryit' component={TryItComponent} />
        </div>
      </Router>
    );
  }
}
export default ThetaRouter;