import React, { Component } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { ServerCluster, Resources, FormSchedule, Currency, Configure, Terminal, FormPreviousLink } from 'grommet-icons';

class DashboardPanelComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'main'
    }

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(selected) {
    this.setState({
      selected: selected
    });

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
            <FormPreviousLink color={this.state.selected === '' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('')} />
            <ServerCluster color={this.state.selected === 'main' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('main')} />
            <Resources color={this.state.selected === 'resources' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('resources')} />
            <Terminal color={this.state.selected === 'terminal' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('terminal')} />
            <FormSchedule color={this.state.selected === 'tasks' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('tasks')} />
            <Currency color={this.state.selected === 'shop' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('shop')} />
            <Configure color={this.state.selected === 'settings' ? 'brand' : 'white'} style={{cursor: "pointer"}} onClick={() => this.setSelected('settings')} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardPanelComponent;