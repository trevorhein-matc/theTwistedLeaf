// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeConsumer } from 'styled-components'
import { BaseContainer } from '../Element'

const Query = styled(BaseContainer)`
  @media only screen and (max-width: ${props => props.size / 16}em) {
    display: none;
  }
`

export function MediaQuery({
  device,
  theme,
  children,
  ...props
}: {
  device: string,
  theme: any,
  children: React.Node,
  props: any
}) {
  return (
    <ThemeConsumer>
      {theme => {
        const size = theme.media.sizes[device]

        // Check that the specified device was found
        if (!size) {
          throw new Error(`${device} is not a valid device.`)
        }

        return <Query size={size}>{children}</Query>
      }}
    </ThemeConsumer>
  )
}

MediaQuery.propTypes = {
  device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
  children: PropTypes.node.isRequired
}