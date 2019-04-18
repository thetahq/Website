import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Grid, Button } from 'grommet';
import ContainerSelector from '../widgets/SelectContainerComponent';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      containers: [
        {
          id: 1,
          os: 'ubuntu',
          name: 'first',
        },
        {
          id: 2,
          os: 'centos',
          name: 'second',
        },
        {
          id: 3,
          os: 'fedora',
          name: 'third',
        },
        {
          id: 4,
          os: 'arch',
          name: 'test',
        }
      ]
    }
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
            <Heading level='1' size='medium'>Select your container</Heading>
            <Grid
              rows={['xsmall', 'xsmall']}
              columns={['small', 'small', 'small']}
              justify='center'
              gap='medium'
              areas={[
                { name: 'con1', start: [0, 0], end: [0, 0] },
                { name: 'con2', start: [1, 0], end: [1, 0] },
                { name: 'con3', start: [2, 0], end: [2, 0] },
                { name: 'con4', start: [0, 1], end: [0, 1] },
                { name: 'con5', start: [1, 1], end: [1, 1] },
                { name: 'con6', start: [2, 1], end: [2, 1] },
              ]}
            >
            {this.state.containers.map(cont => (
              <ContainerSelector
                key={cont.id}
                contId={cont.id}
                osName={cont.os}
                contName={cont.name}
                Selected={e => this.setState({selected: e})} 
              />)
              )
            }
            </Grid>
            <Button margin={{top: '2rem'}} color='brand' primary={true} label='Create new container' />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardComponent;