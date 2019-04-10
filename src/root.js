import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import ThetaRouter from './router';

const Root = ({ store }) => (
    <Provider store={store}>
        <ThetaRouter />
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root