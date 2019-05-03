import React, { Component } from 'react';
import { Box, Heading, ResponsiveContext, Grid, Button, Text, Form, FormField } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora, PowerShutdown, PowerReset, Clock, Currency, Basket } from 'grommet-icons';
import ContainerSelector from '../widgets/SelectContainerComponent';
import Panel from '../widgets/DashboardPanelComponent';
import { Line } from 'react-chartjs';

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
          status: 'offline',
          expire: 'expired',
        },
        {
          id: 2,
          os: 'centos',
          name: 'second',
          status: 'offline',
          expire: '2019-09-05 15:12',
          resources: {
            labels: ["12:00", "12:05", "12:10", "12:15", "12:30", "12:35", "12:40"],
            datasets: [
              {
                label: "CPU usage",
                fillColor: "rgba(225,0,225,0.2)",
                strokeColor: "rgba(225,0,225,1)",
                pointColor: "rgba(225,0,225,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(225,0,225,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: "RAM usage",
                fillColor: "rgba(1,0,200,0.2)",
                strokeColor: "rgba(1,0,200,1)",
                pointColor: "rgba(1,0,200,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(1,0,200,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          }
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
      <Grid
        rows={['6rem', '2rem', '2rem', '2rem', '4rem', '5rem']}
        columns={['medium', 'medium', 'medium']}
        justify='center'
        gap='none'
        fill={true}
        background='black'
        areas={[
          { name: 'name', start: [1, 0], end: [1, 0] },
          { name: 'status', start: [1, 1], end: [1, 1] },
          { name: 'os', start: [1, 2], end: [1, 2] },
          { name: 'expire', start: [1, 3], end: [1, 3] },
          { name: 'options', start: [1, 4], end: [1, 4] },
          { name: 'getMoreTime', start: [1, 5], end: [1, 5] },
        ]}
      >
        <Heading gridArea='name' color='white'>{this.state.selectedContainer.name}</Heading>
        <Text gridArea='status' color='white'>Status: {this.state.selectedContainer.status}</Text>
        <Text gridArea='os' color='white'>Operating system: {this.state.selectedContainer.os}</Text>
        <Text gridArea='expire' color='white'>Expire: {this.state.selectedContainer.expire}</Text>
        <Box
          direction='row'
          gridArea='options'
          animation='fadeIn'
          align='center'
          justify='center'
          background='black'
          gap='medium'
        >
          <PowerReset style={{ cursor: "pointer" }} size='3rem' />
          <PowerShutdown style={{ cursor: "pointer" }} size='3rem' />
        </Box>
        {this.state.selectedContainer.expire === 'expired' && (
          <Button
            style={{ color: 'white' }}
            gridArea='getMoreTime'
            margin={{ top: '2rem' }}
            icon={<Clock />}
            color='brand'
            primary={false}
            label='Get More Hosting Time'
            onClick={() => this.setState({ selected: 'shop' })}
          />
        )}
      </Grid>
    );

    const resourcesMenu = (
      <Grid
        rows={['6rem', '17rem', '2rem', '2rem']}
        columns={['medium', 'medium', 'medium']}
        justify='center'
        gap='none'
        fill={true}
        background='black'
        areas={[
          { name: 'name', start: [1, 0], end: [1, 0] },
          { name: 'cpuUsage', start: [0, 1], end: [2, 1] },
          { name: 'l1', start: [1, 2], end: [1, 2] },
          { name: 'l2', start: [1, 3], end: [1, 3] },
        ]}
      >
        <Heading gridArea='name' color='white'>Resources</Heading>
        <Box gridArea='cpuUsage'>
          <Line data={this.state.selectedContainer.resources} width="600" height="250" />
        </Box>
        <Text gridArea="l1" color="rgba(1,0,200,1)">CPU</Text>
        <Text gridArea="l2" color="rgba(225,0,225,1)">RAM</Text>
      </Grid>
    );

    const shopMenu = (
      <Grid
        rows={['6rem', '2rem', '2rem', '5rem', '15rem']}
        columns={['medium', 'medium', 'medium']}
        justify='center'
        gap='none'
        fill={true}
        background='black'
        areas={[
          { name: 'name', start: [1, 0], end: [1, 0] },
          { name: 'credits', start: [0, 1], end: [2, 1] },
          { name: 'price', start: [0, 2], end: [2, 2] },
          { name: 'addtime', start: [0, 3], end: [2, 3] },
          { name: 'configcont', start: [1, 4], end: [1, 4] },
        ]}
      >
        <Heading gridArea='name' color='white'>Shop</Heading>
        <Box gridArea='credits' direction='row'>
          <Text color='white'>Credits: (user.credits)&nbsp;</Text>
          <Currency color="white" />
        </Box>
        <Text gridArea='price' color='white'>Price: (user.pays)/h</Text>

        <Button
          gridArea='addtime'
          margin={{ top: '2rem' }}
          icon={
            <Basket 
              color='white'
            />
          }
          color='brand'
          label='Watch Ad and get 10 credits'
          style={{ color: 'white' }}
        />

        <Box gridArea='configcont' background='black' margin={{ top: '2rem' }}>
          <Form>
            <Text margin={{ left: '5em', top: '2rem' }}>CPU cores</Text>

            <FormField
              type='number'
              style={{ textAlign: 'center' }}
              align='center'
              required={true}
              name='cpucores'
              value='1'
            />

            <Text margin={{ left: '7rem', top: '2rem' }}>RAM</Text>

            <FormField
              type='number'
              style={{ textAlign: 'center' }}
              align='center'
              required={true}
              name='ram'
              value='512'
            />

            <Button
              margin={{ left: '5rem', top: '2.5rem' }}
              type='submit'
              color='brand'
              label='Create'
            />
          </Form>
        </Box>
      </Grid>
    );

    const menuRenderer = (
      <div>
        {this.state.selected === 'main' ? mainMenu : <div></div>}
        {this.state.selected === 'resources' ? resourcesMenu : <div></div>}
        {this.state.selected === 'terminal' ? <Heading>terminal</Heading> : <div></div>}
        {this.state.selected === 'tasks' ? <Heading>tasks</Heading> : <div></div>}
        {this.state.selected === 'shop' ? shopMenu : <div></div>}
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

                <Panel current={this.state.selected} Selected={(e) => menuHandler(e)} />
                {menuRenderer}
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