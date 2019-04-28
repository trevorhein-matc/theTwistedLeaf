// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from '../Element'

type Props = {
    children: PropTypes.node
}

export const MenuButton = (props: Props) => (
    <ThemeConsumer>
        { theme => <IconButton icon={theme.icons.Menu} {...props} />}
    </ThemeConsumer>
)

MenuButton.propTypes = {
    variant: PropTypes.string,
    // children: PropTypes.node.isRequired
}