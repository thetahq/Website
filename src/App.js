import React, { Component } from 'react';
import { Grommet } from 'grommet';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import Theme from './assets/theme.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grommet full={true} theme={Theme }>
          <NavbarComponent/>
          <HomeComponent/>
        </Grommet>
      </div>
    );
  }
}

export default App;
