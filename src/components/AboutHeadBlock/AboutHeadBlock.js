import React from 'react'
import { Card, Heading } from 'rebass'

class AboutHeadBlock extends React.Component {

    render() {
        return (
            <Card
                p={0}
                py={7}
                backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                backgroundSize='cover'
                color='white'
                bg='darkgray'
                >
                <Heading
                    textAlign='center'
                    fontSize={[ 4, 5, 6 ]}>
                    A Few Things About Us
                </Heading>
            </Card>
        )
    }
}

export default AboutHeadBlock;