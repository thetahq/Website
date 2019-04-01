import React, { Component } from 'react';
import { Heading, Box, Button } from 'grommet';
import { Sign, FormEdit } from 'grommet-icons';
import { Link } from 'react-router-dom';

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

        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <Heading level='3' margin='none'>THQ</Heading>
        </Link>
        <Box
          direction='row'
        >
          <Link to='/signin'>
            <Button margin={{ right: '0.5rem' }} color='brand' icon={<Sign />} label='Sign In' onClick={() => { }} />
          </Link>
          <Link to='/register'>
            <Button color='brand' icon={<FormEdit />} label='Register' onClick={() => { }} />
          </Link>
        </Box>
      </Box>
    );
  }
}

export default NavbarComponent;