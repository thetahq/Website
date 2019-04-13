import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, Text } from 'grommet';
import SystemSelector from '../widgets/SystemSelectorComponent';

class ContCreateComponent extends Component {
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
            <Heading level='1' size='medium'>Container Creator</Heading>
              <Form>
                <Text margin={{left: '3.5rem'}}>Select operating system</Text>
                <SystemSelector />
              </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ContCreateComponent;