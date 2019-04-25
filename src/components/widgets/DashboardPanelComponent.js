import React, { Component } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { ServerCluster, Resources, FormSchedule, Currency, Configure, Terminal, FormPreviousLink } from 'grommet-icons';

class DashboardPanelComponent extends Component {
  constructor(props) {
    super(props);

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(selected) {
    this.props.Selected(selected);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {() => (
          <Box
            animation='fadeIn'
            fill='vertical'
            background='black'
            pad='medium'
            gap='medium'
          >
            <FormPreviousLink color={this.props.current === '' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('')} />
            <ServerCluster color={this.props.current === 'main' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('main')} />
            <Resources color={this.props.current === 'resources' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('resources')} />
            <Terminal color={this.props.current === 'terminal' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('terminal')} />
            <FormSchedule color={this.props.current === 'tasks' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('tasks')} />
            <Currency color={this.props.current === 'shop' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('shop')} />
            <Configure color={this.props.current === 'settings' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('settings')} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardPanelComponent;