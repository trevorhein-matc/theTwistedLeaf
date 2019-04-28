import React from 'react'
import { Image as ImageBase } from 'rebass'

class MainCardImage extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <ImageBase 
                src={data.img} 
                my={0}
                width={[1]}
                borderRadius={8}
                height={[250, 200, 300]}
            />
        )
    }
}

export default MainCardImage;