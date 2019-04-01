import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button } from 'grommet';
import { FormCheckmark } from 'grommet-icons';

class SignInComponent extends Component {

  signIn(values) {

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
            margin={{
              bottom: '2rem'
            }}
            background='black'
          >
            <Heading level='1' size='medium'>Sign in</Heading>
            <Box
              align='center'
              justify='center'
              background='accent-1'
              pad='medium'
              round='small'
            >
              <Form onSubmit={this.signIn}>
                <FormField required={true} type='email' name='email' label='E-Mail' />
                <FormField required={true} type='password' name='password' label='Password' />
                <Button margin={{top: '1rem'}} icon={<FormCheckmark/>} type='submit' primary label='Sign in' />
              </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default SignInComponent;