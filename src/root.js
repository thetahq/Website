import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet';
import Theme from './assets/theme.json';
import ThetaRouter from './router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Grommet full={true} theme={Theme}>
      <ThetaRouter />
    </Grommet>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root