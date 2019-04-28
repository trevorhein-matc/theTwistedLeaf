import React from 'react'
import { Image as ImageBase } from 'rebass'
import { Flex } from 'rebass'

import avocadoBox from"../../images/ingredientPics/avocadoBox.jpg";

class JumbotronImage extends React.Component {
    render() {
        // const { data } = this.props;
        return (
            <Flex
                width={[1, 1, 1]}
                mx='auto'
                flexWrap='wrap' 
            >
                <ImageBase 
                    src={avocadoBox}
                    my={0}
                    width={[1, 1, 1]}
                    borderRadius={2}
                    height='100%'
                />
            </Flex>
        )
    }
}

export default JumbotronImage;