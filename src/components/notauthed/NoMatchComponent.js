import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet';

class NoMatchComponent extends Component {

  render() {
    return (
      <ResponsiveContext.Consumer>
        {() => (
          <Box
            animation='fadeIn'
            align='center'
            justify='center'
            fill='horizontal'
            pad='medium'
            background='black'
          >
            <Heading level='1' size='medium'>Page not found, you can blame Noituri</Heading>

          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default NoMatchComponent