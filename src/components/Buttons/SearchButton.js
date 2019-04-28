// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from '../Element'

type Props = {
    children: PropTypes.node
}

export const SearchButton = (props: Props) => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Search} {...props} />}
    </ThemeConsumer>
)

SearchButton.propTypes = {
    variant: PropTypes.string,
    // children: PropTypes.node.isRequired
}