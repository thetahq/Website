import React, { Component } from 'react';
import { Grommet } from 'grommet';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import Theme from './assets/theme.json';
import './App.css';
import ThetaRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grommet full={true} theme={Theme }>
          <NavbarComponent/>
          <ThetaRouter/>
        </Grommet>
      </div>
    );
  }
}

export default App;
