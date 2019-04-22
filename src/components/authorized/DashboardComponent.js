import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Grid, Button, Text } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora } from 'grommet-icons';
import ContainerSelector from '../widgets/SelectContainerComponent';
import Panel from '../widgets/DashboardPanelComponent';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContainer: '',
      selected: 'main',
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

  getIcon() {
    switch (this.props.osName) {
      case 'ubuntu':
      return <Ubuntu color='#FF8F00' />
      case 'arch':
      return <Archlinux color='#1AE3E0' />
      case 'centos':
      return <Centos color='#881AE3' />
      case 'fedora':
      return <Fedora color='#000EE3' />
      default:
      return
    }
  }

  render() {
    const menuHandler = (selected) => {
      this.setState({
        selected: selected
      });

      if (selected === '') {
        this.setState({
          selectedContainer: ''
        });
      }
    }

    const mainMenu = (
      <Box
        animation='fadeIn'
        fill={true}
        background='black'
        align='center'
        margin={{
          left: '2rem'
        }}
      >
        <Heading>{this.state.selectedContainer.name}</Heading>
        <Text>Operating system: {this.state.selectedContainer.os}</Text>
      </Box>
    );

    const menuRenderer = (
      <div>
        {this.state.selected === 'main' ? mainMenu : <div></div>}
        {this.state.selected === 'resources' ? <Heading>resources</Heading> : <div></div>}
        {this.state.selected === 'terminal' ? <Heading>terminal</Heading> : <div></div>}
        {this.state.selected === 'tasks' ? <Heading>tasks</Heading> : <div></div>}
        {this.state.selected === 'shop' ? <Heading>shop</Heading> : <div></div>}
        {this.state.selected === 'settings' ? <Heading>settings</Heading> : <div></div>}
      </div>
    );

    const selecter = (
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
              Selected={e => {
                this.setState({
                  selectedContainer: cont,
                  selected: 'main'
                })
              }
              }
            />)
          )
          }
        </Grid>
        <Button margin={{ top: '2rem' }} color='brand' primary={true} label='Create new container' />
      </Box>
    );

    return (
      <ResponsiveContext.Consumer>
        {() => {
          return this.state.selectedContainer !== '' ?
            (
              <Box
                direction='row'
                fill={true}
              >

                <Panel Selected={(e) => menuHandler(e)} />
                { menuRenderer }
              </Box>
            )

            : (
              <div>
                {selecter}
              </div>
            )
        }
        }
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardComponent;