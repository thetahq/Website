import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Form, FormField, Button } from 'grommet';
import { isAuthorized } from '../../actions/UserAction';
import { connect } from "react-redux";


class TryItComponent extends Component {
  constructor(props) {
    super(props);
    
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(test) {
    this.props.isAuthorized(!this.props.authorized)
    // let headers = new Headers();
    // // headers.append('Content-Type', 'application/json');
    // const init = {
    //   method: 'POST',
    //   headers: headers,
    //   // body: JSON.stringify({message: test.value.sayhello})
    // };
    // fetch('http://localhost:8000/verifysession', init).then((resp) => {
    //   console.log(resp);
    // }).catch((err) => {
    //   console.error(err);
    // });
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
            <Heading level='1' size='medium'>Try It<sup>(For debug)</sup></Heading>
            <Box
              align='center'
              justify='center'
              background='accent-1'
              pad='medium'
              round='small'
            >
              <Form onSubmit={this.sendRequest}>
                <FormField name='sayhello' label='Debug test'/>
                <Button type='submit' primary label='Submit'/>
              </Form>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
const mapStateToProps = state => ({
  authorized: state.isAuthorized
})

const mapDispatchToProps = dispatch => ({
  isAuthorized: (data) => dispatch(isAuthorized(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TryItComponent)