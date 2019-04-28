// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Image as ImageBase } from 'rebass'

export function Image({
    src,
    ...props
}: {
    src: 'string',
    props: any
}) {
    return (
        <ImageBase src={src} {...props} />
    )
}

// export const Image = ({ src, ...props }) => <ImageBase src={src} {...props} />

Image.propTypes = {
    src: PropTypes.string.isRequired
}