import React from 'react'
import HeadingBase from '../Heading/HeadingBase'

const ProductCardHeading = props => (
    <HeadingBase
        as='h2'
        mx='.5em'
        py={1}
        fontSize={[3, 4, 5]}
        fontFamily='roboto'
        textAlign='left'
        {...props}
    />
)

export default ProductCardHeading