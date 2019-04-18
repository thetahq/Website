import React, { Component } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora } from 'grommet-icons';

class SystemSelectorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ubuntu'
    };
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
            direction='row'
            animation='fadeIn'
            align='center'
            justify='center'
            fill='horizontal'
            pad='medium'
            gap='medium'
          >
            <Ubuntu
              style={{cursor: "pointer"}}
              color={this.state.selected === 'ubuntu' ? '#FF8F00' : '#FFF'}
              onClick={() => this.setSelected('ubuntu')}
              size='xmedium'
            />
            <Archlinux
              style={{cursor: "pointer"}}
              color={this.state.selected === 'arch' ? '#1AE3E0' : '#FFF'}
              onClick={() => this.setSelected('arch')}
              size='xmedium'
            />
            <Centos
              style={{cursor: "pointer"}}
              color={this.state.selected === 'centos' ? '#881AE3' : '#FFF'}
              onClick={() => this.setSelected('centos')}
              size='xmedium'
            />
            <Fedora
              style={{cursor: "pointer"}}
              color={this.state.selected === 'fedora' ? '#000EE3' : '#FFF'}
              onClick={() => this.setSelected('fedora')}
              size='xmedium'
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default SystemSelectorComponent;