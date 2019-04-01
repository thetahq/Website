import React, { Component } from 'react';
import { Grommet } from 'grommet';
import Theme from './assets/theme.json';
import './App.css';
import ThetaRouter from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grommet full={true} theme={Theme }>
          <ThetaRouter/>
        </Grommet>
      </div>
    );
  }
}

export default App;
