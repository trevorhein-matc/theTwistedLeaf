import React from 'react'
import HeadingBase from '../Heading/HeadingBase'

const MainCardHeading = props => (
    <HeadingBase
        as='h1'
        mx='.5em'
        py={1}
        fontSize={[5, 5, 6]}
        fontFamily='roboto'
        textAlign='left'
        {...props}
    />
)

export default MainCardHeading