import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button, CheckBox } from 'grommet';
import { FormCheckmark } from 'grommet-icons';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor'

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      created: false,
      checked: false,
      errors: {
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        terms: ''
      }
    }

    this.register = this.register.bind(this);
    this.resetErrors = this.resetErrors.bind(this);
  }

  resetErrors() {
    this.setState({
      errors: {
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        terms: ''
      }
    })
  }

  register(e) {
    this.resetErrors();

    if (e.value.username.length < 3 || e.value.username.length > 20 ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          username: 'Username should be min: 3. and max: 20 length'
        }
      }));
      return;
    } else if (e.value.email.length < 6 || e.value.email.length > 50 ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          email: 'E-Mail should be min: 6. and max: 50 length'
        }
      }));
      return;
    } else if (e.value.password.length < 8 || e.value.password.length > 50 ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          password: 'Password should be min: 8. and max: 50 length'
        }
      }));
      return;
    } else if (e.value.password !== e.value.confirmpassword) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          confirmpassword: 'Passwords does not match.'
        }
      }));
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
      if (!resp.ok) {
        this.notify('Error. Try again later.');
      } else {
        resp.json().then((data) => {
          if (data.status === "error") {
            switch (data.message) {
              case 'ExistsUsername':
                this.setState(prevState => ({
                  errors: {
                    ...prevState.errors,
                    username: 'Username exists'
                  }
                }));
                break;
              case 'ExistsEmail':
                this.setState(prevState => ({
                  errors: {
                    ...prevState.errors,
                    email: 'E-Mail exists'
                  }
                }));
                break;
              case 'IllegalCharacters':
                this.notify('Inputs cointain illegal characters');
                break;
              case 'BadLength':
                this.notify('Some values are not long enough');
                break;
              case 'Terms':
                this.setState(prevState => ({
                  errors: {
                    ...prevState.errors,
                    terms: 'Terms not accepted'
                  }
                }));
                break;
              default:
                this.notify('Error. Try again later.');
            }
          } else if (data.status === "ok" && data.message === "VerifyEmail") {
            // this.setState({
            //   created: true
            // })
          } else {
            this.notify('Error. Try again later.');
          }
        });
      }
    }).catch((err) => {
      this.notify(err.message);
      console.error(err.message);
    });

    e.value.confirmpassword = '';
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
            <Heading level='1' size='medium'>Register</Heading>
            <Box
              align='center'
              justify='center'
              background='accent-2'
              pad='medium'
              round='small'
            >
            { !this.state.created ? (
                <Form onSubmit={this.register}>
                  <FormField error={this.state.errors.username} required={true} name='username' label='Username' />
                  <FormField error={this.state.errors.email} required={true} type='email' name='email' label='E-Mail' />
                  <FormField error={this.state.errors.password} required={true} type='password' name='password' label='Password' />
                  <FormField error={this.state.errors.confirmpassword} required={true} type='password' name='confirmpassword' label='Confirm Password' />
                  <CheckBox
                    error={this.state.errors.terms}
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
                  <Button margin={{ top: '1rem' }} icon={<FormCheckmark />} type='submit' primary label='Register' />
                </Form>
            ) : (
              <Heading level="3" size="medium">Account Created. Now go verify your email!</Heading>
            )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default RegisterComponent;