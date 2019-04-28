// @flow
import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
    children: PropTypes.node
}

export const Header = (props: Props) => <BaseContainer as="header" {...props} />

Header.propTypes = {
    children: PropTypes.node.isRequired
}