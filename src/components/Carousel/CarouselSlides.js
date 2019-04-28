import React from 'react'
import { Flex, Box, Card, Heading } from 'rebass'
import { withStyles } from '@material-ui/core/styles'
import CardActionArea from "@material-ui/core/CardActionArea"

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

function ImagePicker(props) {
    const mjPic = props.mjPic;
    switch (mjPic) {
        case "carousel1":
            return (
                <Card
                    p={1}
                    py={[7, 7, 7]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.denverpost.com/wp-content/uploads/2018/12/Marijuana007.jpg)'
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                    bg='orange'
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
                                Welcome to the Twisted Leaf
                            </Heading>
                        </Box>
                    </CardActionArea>
                </Card>
            );
        case "carousel2":
            return (
                <Card
                    p={1}
                    py={[7, 7, 7]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.gannett-cdn.com/-mm-/dc8c471a194a6e11d95130f1cf23c3262647d422/c=0-54-580-380/local/-/media/2019/01/17/USATODAY/usatsports/MotleyFool-TMOT-61d3e8b8-3bdcf30d.jpg?width=3200&height=1680&fit=crop)'
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                    bg='orange'
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
                                Put your mind at ease with our Q&A
                            </Heading>
                        </Box>
                    </CardActionArea>
                </Card>
            );
        case "carousel3":
            return (
                <Card
                    p={1}
                    py={[7, 7, 7]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://media.wired.com/photos/5be0db79ec3a5f54b04d33b2/master/pass/marijuana-1036610200.jpg)'
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                    bg='orange'
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
                                Learn More About Production
                            </Heading>
                        </Box>
                    </CardActionArea>
                </Card>
            );
        case "carousel4":
            return (
                <Card
                    p={1}
                    py={[7, 7, 7]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.rollingstone.com/wp-content/uploads/2018/07/oregon-has-too-much-weed.jpg?crop=900:600&width=440)'
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                    bg='orange'
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
                                Check out our products
                            </Heading>
                        </Box>
                    </CardActionArea>
                </Card>
            );
        default:
            return (
                <Box
                    bg='blue'
                />
            )
    }
}

class CarouselSlides extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Flex
                width={[1, 1, 1]}
                mx='auto'
            >
                <ImagePicker mjPic={data.name} />
            </Flex>
        )
    }
}

export default withStyles(styles, { withTheme: true })(CarouselSlides);