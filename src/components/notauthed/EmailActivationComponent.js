import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet';

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
        email: this.props.match.params.email,
        id: this.props.match.params.id
      })
    };

    fetch('http://localhost:8000/verifyemail', init).then((resp) => {
      if (!resp.ok) {
        this.setState({
          message: 'Error. Could not verify e-mail.'
        });
      } else {
        resp.json().then((data) => {
          if (data.status === "error") {
            this.setState({
              message: 'E-Mail not verified. Try again.'
            })
          } else if (data.status === "ok") {
            this.setState({
              message: 'E-Mail verified. Now you can Sign in.'
            })
          } else {
            this.setState({
              message: 'Error. Could not verify e-mail.'
            });
          }
        });
      }
    }).catch((err) => {
      this.setState({
        message: 'Error. Could not verify e-mail.'
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
            <Heading level='1' size='medium'>E-Mail Verification</Heading>
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