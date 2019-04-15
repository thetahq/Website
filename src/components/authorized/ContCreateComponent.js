import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Text, Button } from 'grommet';
import SystemSelector from '../widgets/SystemSelectorComponent';

class ContCreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOS: 'ubuntu'
    };
  }

  createContainer(e) {
    // handle
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
            <Heading level='1' size='medium'>Container Creator</Heading>
              <Form onSubmit={this.createContainer}>
                <Text margin={{left: '5rem'}}>Container name</Text>
                <FormField align='center' required={true} name='containername' />
                <Text margin={{left: '3.5rem', top: '2rem'}}>Select operating system</Text>
                <SystemSelector Selected={(selected) => this.setState({selectedOS: selected})} />
                <Text margin={{left: '6.5rem', top: '2rem'}}>CPU cores</Text>
                <FormField type='number' align='center' required={true} name='cpucores' />
                <Text margin={{left: '8rem', top: '2rem'}}>RAM</Text>
                <FormField type='number' align='center' required={true} name='ram' />
                <Button margin={{left: '6.5rem', top: '2.5rem'}} type='submit' color='brand' label='Create'/>
              </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ContCreateComponent;