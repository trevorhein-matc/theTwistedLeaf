// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Link as BaseLink } from 'rebass'
import styled from 'styled-components'

const StyledLink = styled(BaseLink)`
    ${props => props.theme.variants.link[props.variant || 'primary']};
`

export function Link({
    children,
    href,
    ...props
}: {
    children: React.Node,
    href: string,
    props: any
}) {
    return (
        <StyledLink href={href} {...props}>
            {children}
        </StyledLink>
    )
}


Link.propTypes = {
    href: PropTypes.string.isRequired,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired
}
