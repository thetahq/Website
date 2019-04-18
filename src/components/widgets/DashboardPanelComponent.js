import React, { Component } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import { Ubuntu, Archlinux, Centos, Fedora } from 'grommet-icons';

class DashboardPanelComponent extends Component {

  render() {
    return (
      <ResponsiveContext.Consumer>
        {() => (
          <Grid
            rows={['xsmall', 'xsmall']}
            columns={['small', 'small', 'small']}
            justify='center'
            gap='medium'
            areas={[
              { name: 'title', start: [0, 0], end: [0, 0] },
              { name: 'body', start: [1, 0], end: [1, 0] }
            ]}
          >

          </Grid>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default DashboardPanelComponent;