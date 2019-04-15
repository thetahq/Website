import React, { Component } from 'react';
import { Stack, Box, Heading, Button, Grid, ResponsiveContext } from 'grommet';
import { Servers, Services } from 'grommet-icons';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            animation='fadeIn'
            direction='row'
            align='center'
            justify='between'
            fill='horizontal'
            pad='medium'
            background='#c70039'
          >
            <Grid
              rows={[size !== 'small' ? 'small' : '8rem', '2.5rem']}
              columns={size !== 'small' ? ['medium', 'xsmall', 'medium'] : ['medium']}
              justify='center'
              gap='medium'
              areas={[
                { name: 'header', start: [0, 0], end: size !== 'small' ? [2, 0] : [0, 0] },
                { name: 'options', start: size !== 'small' ? [1, 1] : [0, 1], end: size !== 'small' ? [1, 1] : [0, 1] }
              ]}
            >
              <Heading gridArea='header' level='1' size='xlarge'>Theta Radix</Heading>
              <Box gridArea='options'>
                <Link to='/tryit'>
                  <Button primary={true} size='medium' label='Try it' color='brand' />
                </Link>
              </Box>
            </Grid>
            {size !== 'small' && (
              <Stack
                margin={{
                  top: '5rem',
                  right: '14rem',
                }}
                anchor='bottom-right'
              >
                <Servers
                  color='brand'
                  size='xlarge'
                />
                <Services
                  color='violet'
                  size='large'
                />
              </Stack>
            )}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default HomeComponent;