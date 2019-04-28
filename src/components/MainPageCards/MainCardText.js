import React from 'react'
import CustomTextBase from '../CustomText/CustomTextBase'

const MainCardText = props => (
    <CustomTextBase
        fontSize={[3, 3, 3]}
        py={1}
        mx={4}
        fontFamily='roboto'
        {...props}
    />
)

export default MainCardText