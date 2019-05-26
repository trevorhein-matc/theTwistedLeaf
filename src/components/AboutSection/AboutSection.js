import React from 'react';
import { Box, Text } from 'rebass'
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import AboutBanner from '../AboutSection/AboutBanner'


const useStyles = makeStyles(theme => ({
    root: {
        background: theme.background,
        border: 0,
        borderRadius: 0,
        boxShadow: '0 3px 5px 0px #6c6c6d',
        color: 'black',
        display: "flex",
        fontFamily: 'roboto',
        textAlign: 'center'
    },
}))

function About() {
    const classes = useStyles();
    return (
        <div>
                <AboutBanner />
        <Box className={classes.root}
            p={3}
            width={[1, 1, 1]}
        >
            <Box
                width={1}
                my='auto'
                p={[3,3,4]}
            >
                <Box
                    width={1}
                    pb={[3,1,1]}
                >
                    <Text
                        fontSize={[4,4,6]}
                        fontWeight='bold'
                    >
                        Our Twisted Philosophy
                    </Text>
                </Box>
                <Box
                    width={'80%'}
                    mx='auto'
                    p={[1, 3, 4]}
                >
                    <Text
                        fontSize={[2,4,4]}
                        lineHeight={[1.25,1,1]}
                        pb={[3,3,3]}
                    >
                        The Twisted Leaf was born out of a desire to produce a high quality candies and confections infused with the health benefits of CBD hemp oil.                     
                    </Text>
                    <Text 
                        fontSize={[2,4,4]}
                        lineHeight={[1.25,1,1]}
                        pb={[3,3,3]}
                    >
                        We are family owned and operated with a focus on small batch, handmade production. Our hemp is grown right here in the state of Wisconsin by local farmers. Everything we make is crafted with care and rigorously tested to ensure consistency and quality. 
                    </Text>
                    <Text 
                        fontSize={[2,4,4]}
                        lineHeight={[1.25,1,1]}
                        pb={[3,3,3]}
                    >
                        You can trust that when you eat a Twisted Leaf candy or confection that it is exactly as advertised and absolutely delicious. 
                    </Text>
                    <Text 
                        fontSize={[3,5,5]}
                        lineHeight={[1.25,1,1]}
                    >
                        Enjoy!
                    </Text>
                </Box>
            </Box>
        </Box>
        </div>
    )
}

const theme = {
    background: 'white',
};

function AboutSection() {
    return (
        <ThemeProvider theme={theme}>
            <About />
        </ThemeProvider>
    )
}

export default AboutSection

