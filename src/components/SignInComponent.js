import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button } from 'grommet';
import { FormCheckmark } from 'grommet-icons';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor'
import * as Cookies from "js-cookie";

class SignInComponent extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this)
  }


  signIn(e) {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(`${e.value.email}:${e.value.password}:${e.value.password}`))

    const init = {
      method: 'POST',
      headers: headers
    };
    fetch('http://localhost:8000/signin', init).then((resp) => {
      if (!resp.ok) {
        this.notify('Error. Try again later.');
      } else {
        resp.json().then((data) => {
          if (data.status === "error") {
            switch (data.message) {
              case 'InvalidData':
                this.notify('There is no user with this credentials.');
                break;
              case 'NotVerified':
                this.notify('Verify your E-Mail first.');
                break;
              default:
                this.notify('Error. Try again later.');
            }
          } else if (data.status === "ok" && data.message !== "") {
            Cookies.set("token", data.message, { expires: 7, path: '/' });
            // @todo redirect to dashboard
          } else {
            this.notify('Error. Try again later.');
          }
        });
      }
    }).catch((err) => {
      this.notify(err.message);
      console.error(err.message);
    });

    e.value.password = '';
  }

  notify(text) {
    toast.configure({
      autoClose: 3000,
      draggable: true,
      hideProgressBar: true,
      transition: Slide,
      background: "#ff00ff"
    });

    toast(text, {
      position: toast.POSITION.BOTTOM_LEFT,
      className: css({
        background: 'black',
        border: '2px solid #BF0000',
        borderRadius: '10px',
        marginBottom: '0.5rem',
      }),
      bodyClassName: css({
        fontSize: '15px',
        color: 'white',
        marginLeft: '0.5rem',
      }),
    });
  };

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