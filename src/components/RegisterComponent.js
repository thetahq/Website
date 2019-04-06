import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button, CheckBox } from 'grommet';
import { FormCheckmark } from 'grommet-icons';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }

    this.register = this.register.bind(this);
  }

  register(e) {
    if (e.value.password !== e.value.confirmpassword) {
      return;
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(`${e.value.email}:${e.value.password}:${e.value.confirmpassword}`))

    const init = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        username: e.value.username,
        terms: this.state.checked
      })
    };
    fetch('http://localhost:8000/register', init).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.error(err);
    });

    // @todo handle all errors and redirect to dashboard if everything is ok
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
              background='accent-2'
              pad='medium'
              round='small'
            >
              <Form onSubmit={this.register}>
                <FormField required={true} name='username' label='Username' />
                <FormField required={true} type='email' name='email' label='E-Mail' />
                <FormField required={true} type='password' name='password' label='Password' />
                <FormField required={true} type='password' name='confirmpassword' label='Confirm Password' />
                <CheckBox
                  name='terms'
                  required={true}
                  label='Do you agree with terms of use?'
                  checked={this.state.checked}
                  onChange={
                    event => this.setState({
                      checked: event.target.checked
                    })
                  }
                />
                <Button margin={{top: '1rem'}} icon={<FormCheckmark/>} type='submit' primary label='Register' />
              </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default RegisterComponent;