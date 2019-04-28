// @flow
import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
    children: PropTypes.node
}

export const Address = (props: Props) => <BaseContainer as="address" {...props} />

Address.propTypes = {
    children: PropTypes.node.isRequired
}