import React from 'react'
import { Image as ImageBase } from 'rebass'

class NavBarLogoImage extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <ImageBase
                src={data.img}
                // mb={-1.1}
                // width={}
                borderRadius={0}
                height={100}
            />
        )
    }
}

export default NavBarLogoImage;