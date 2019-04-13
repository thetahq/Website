import React, { Component } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora } from 'grommet-icons';

class SystemSelectorComponent extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {() => (
          <Box
            direction='row'
            animation='fadeIn'
            align='center'
            justify='center'
            fill='horizontal'
            pad='medium'
            gap='medium'
          >
            <Ubuntu onClick={() => console.log('clicked')} size='xmedium' />
            <Archlinux size='xmedium' />
            <Centos size='xmedium' />
            <Fedora size='xmedium' />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default SystemSelectorComponent;