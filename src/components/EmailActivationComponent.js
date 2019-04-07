import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button } from 'grommet';

class EmailActivationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Please wait'
    }
  }

  componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const init = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        email: this.props.email,
        id: this.props.id
      })
    };

    fetch('http://localhost:8000/verifyemail', init).then((resp) => {
      if (!resp.ok) {
        this.setState({
          message: 'Error. Could not verify email.'
        });
      } else {
        resp.json().then((data) => {
          if (data.status === "error") {
            this.setState({
              message: 'Email not verified. Try again.'
            })
          } else if (data.status === "ok") {
            this.setState({
              message: 'Email verified. Now you can Sign in.'
            })
          } else {
            this.setState({
              message: 'Error. Could not verify email.'
            });
          }
        });
      }
    }).catch((err) => {
      this.setState({
        message: 'Error. Could not verify email.'
      });
      console.error(err);
    });
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
            <Heading level='1' size='medium'>Email Verification</Heading>
            <Box
              align='center'
              justify='center'
              background='accent-1'
              pad='medium'
              round='small'
            >
              <Heading level='3'>{this.state.message}</Heading>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default EmailActivationComponent;