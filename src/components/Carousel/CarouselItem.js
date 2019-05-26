import React from 'react'
import { Flex, Box, Card, Heading } from 'rebass'
import { withStyles } from '@material-ui/core/styles'
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from '@material-ui/core/Typography';
import CarouselDescText from '../Carousel/CarouselDescText';

const styles = theme => ({
    root: {
        flexGrow:1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    tester: {
        display: 'block',
        zIndex: 25,
    }
});

class CarouselItem extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Flex
                width={[1, 1, 1]}
                mx='auto'
            >
                <Card
                    p={1}
                    py={[7, 7, 400]}
                    width={[1, 1, 1]}
                    backgroundImage={"url(" + data.image.fluid.src + ")"}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                >
                    <CardActionArea>
                        <Box
                            mt={['-12em', '-13em', '-10em']}
                            p={2}
                            width={[ 3/4, 1/2, 1/2 ]}
                            bg="hsla(0, 0%, 0%, 0.34)" 
                        >
                            <Heading
                                textAlign='center'
                                fontSize={[4, 5, 6]}
                                >
                                {data.title}
                            </Heading>
                            <CarouselDescText>
                                {data.description}
                            </CarouselDescText>
                        </Box>
                    </CardActionArea>
                </Card>
            </Flex>
        )
    }
}

export default withStyles(styles, { withTheme: true })(CarouselItem);