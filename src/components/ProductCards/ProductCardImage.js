import React from 'react'
import { Image as ImageBase } from 'rebass'

class ProductCardImage extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <ImageBase
                src={data.img}
                mb={-1.1}
                width={[1/2, 2/3, 2/3]}
                borderRadius={8}
                height={[125, 200, 300]}
            />
        )
    }
}

export default ProductCardImage;