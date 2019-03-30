import React, { Component } from 'react';
import { Grommet, Box, Heading } from 'grommet';

class HomeComponent extends Component {
  render() {
    return (
      <Box
        tag='nav'
        direction='row'
        align='center'
        justify='center'
        fill='horizontal'
        pad='medium'
        background='black'
      >
        <Heading margin="none">ThetaHQ<sup><sup>(W.I.P.)</sup></sup> - HomePage</Heading>
      </Box>
    );
  }
}

export default HomeComponent;