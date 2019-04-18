import React, { Component } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora } from 'grommet-icons';

class SelectContainerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };
  }

  setSelected(selected) {
    this.setState({
      selected: selected
    });

    this.props.Selected(selected);
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
    return (
      <ResponsiveContext.Consumer>
        {() => (
          <Box
            direction='row'
            animation='fadeIn'
            align='center'
            justify='center'
            border={{ color: 'brand', size: 'small' }}
            fill='horizontal'
            pad='small'
            gap='small'
            round='small'
            style={{cursor: "pointer"}}
            onClick={() => this.props.Selected(this.props.contId)}
          >
            {this.getIcon()} <Text>{this.props.contName}</Text>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default SelectContainerComponent;