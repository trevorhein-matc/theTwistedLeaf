// @flow
import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
    children: PropTypes.node
}

export const Nav = (props: Props) => <BaseContainer as="nav" {...props} />

Nav.propTypes = {
    children: PropTypes.node.isRequired
}