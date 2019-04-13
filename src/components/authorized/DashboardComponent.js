import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button } from 'grommet';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

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
            <Heading level='1' size='medium'>Here's gonna be dashboard</Heading>
            <Box
              align='center'
              justify='center'
              background='accent-1'
              pad='medium'
              round='small'
            >
              <Form>
                
              </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardComponent;