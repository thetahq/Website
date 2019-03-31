import React, { Component } from 'react';
import { Heading, Box, Button } from 'grommet';
import { Sign } from 'grommet-icons';

class NavbarComponent extends Component {
  render() {
    return (
      <Box
        tag='nav'
        direction='row'
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        background='black'
      >

        <Heading level='3' margin='none'>THQ</Heading>
        <Button color='brand' icon={ <Sign/> } label='Sign In' onClick={() => { }}/>
      </Box>
    );
  }
}

export default NavbarComponent;