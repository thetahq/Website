import React, { Component } from 'react';
import { Heading, Box, Button, Text } from 'grommet';
import { Sign, FormEdit } from 'grommet-icons';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchUserData } from '../../actions/UserAction';

class NavbarComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {

    return (
      <Box
        tag='nav'
        direction='row'
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        background='black'
      >

        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <Heading level='3' margin='none'>TR</Heading>
        </Link>
        <Box
          direction='row'
        >
          {!this.props.authorized ? (
            <div>
              <Link to='/signin'>
                <Button margin={{ right: '0.5rem' }} color='brand' icon={<Sign />} label='Sign In' onClick={() => { }} />
              </Link>
              <Link to='/register'>
                <Button color='brand' icon={<FormEdit />} label='Register' onClick={() => { }} />
              </Link>
            </div>
          ) : <Text>Noituri</Text>
          // ) : <Text>{this.props.userData.username}</Text>
          }
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.isAuthorized,
  userData: state.userData
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)