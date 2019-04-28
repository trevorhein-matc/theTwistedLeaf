// @flow
import React from 'react'
import { BaseContainer } from '../BaseContainer'
import PropTypes from 'prop-types'

type Props = {
    children: PropTypes.node
}

export const Section = (props: Props) => <BaseContainer as="section" {...props} />

Section.propTypes = {
    // children: PropTypes.node.isRequired
}