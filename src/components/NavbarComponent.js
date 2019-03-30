import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';

class NavbarComponent extends Component {
  render() {
    return (
      <Box
        tag='nav'
        direction='row'
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      >
      </Box>
    );
  }
}

export default NavbarComponent;