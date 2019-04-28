import React from 'react'
import { Text } from 'rebass'

const CustomTextBase = props => (
    <Text {...props}>
        {props.children}
    </Text>
)

export default CustomTextBase