import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { MediaQuery } from "../../MediaQuery"
import { 
    // BaseContainer,
    Button, 
    Header, 
    Image,
    Link,
    Nav,
    Section 
} from '../../Element'
import { SearchButton } from '../../Buttons'
import MenuButton from '../../IconButtons/MenuButton'

//theme is passed in from the layout.js that wraps everything on the page

const StyledHeader = styled(Header)`
    ${props => props.theme.defaults.masthead};
`

const Item = ({ children, ...props }) => (
    <Section {...props}>{children}</Section>
)

Item.defaultProps = {
    my: 'auto',
    mr: 3
}

export function DefaultLayout({
    image
}: {
    image: any
}) {
    return (
        <StyledHeader flex alignItems="center" p={3}>
        <Section flex width={[24, 1 / 3, 1 / 3]} mr={3}>
            <Item>
                <MenuButton />
            </Item>
            {/* <Item>
                <MenuButton variant="contrast" />
            </Item> */}
            <MediaQuery device="desktop">
                <Nav flex style= {{ lineHeight: '1.5em' }}>
                    <Item>
                        <Link variant="contrast" href="about.html">
                            About
                        </Link>
                    </Item>
                    <Item>
                        <Link variant="contrast" href="about.html">
                            Contact
                        </Link>
                    </Item>
                </Nav>
            </MediaQuery>
        </Section>
        <Section flex width={[4 / 12, 1 / 3, 1 / 3]} justifyContent="center">
            <Image 
                src={image}
                alt="masthead logo"
                height={[24, 60, 60]}
                width={[100, 246, 246]}
                mx="auto"
            />
        </Section>
        <Section flex width={[8 / 12, 1 / 3, 1 / 3]} justifyContent="flex-end">
            <Item>
                <MediaQuery device="tablet">
                    <SearchButton variant="contrast" />
                </MediaQuery>
            </Item>
            <Item>
                <Button fontSize={[0, 2, 3]} variant="contrast">
                    Subscribe
                </Button>
            </Item>
        </Section>
    </StyledHeader>
    )
}

DefaultLayout.propTypes = {
    image: PropTypes.node.isRequired
}