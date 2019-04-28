// @flow
import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
    children: PropTypes.node
}

export const Main = (props: Props) => <BaseContainer as="main" {...props} />

Main.propTypes = {
    children: PropTypes.node.isRequired
}