import React from 'react'
import { Flex } from 'rebass'

const ImageContainer = ({ children }) => (
    <Flex
        width={[1, 1, 1]}
        mx='auto'
        flexWrap='wrap' 
    >
        { children }
    </Flex>
);

export default ImageContainer