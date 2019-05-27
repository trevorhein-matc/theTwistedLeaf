import React from 'react'
import { Box, Text } from 'rebass'
import { ThemeProvider, makeStyles } from '@material-ui/styles';

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

function InfoBox() {
    const classes = useStyles();
    return (
        <Box className={classes.root}
            p={3}
            width={[1, 1, 1/3]}
        >
            <Box
                width={1}
                my='auto'
            >
                <Box
                    width={1}
                >
                    <Text
                        fontSize={[3,4,5]}
                        fontWeight='bold'
                        lineHeight={[1,1,1]}
                    >
                        CHECK US OUT AT BLANK DISPENSARY
                    </Text>
                </Box>
                <Box
                    width={1}
                    p={4}
                >
                    <Text
                        fontSize={[1,2,2]}
                        lineHeight={[1,1,1]}
                    >
                        We are happy to announce a new partnership with Blank. Be sure to keep an eye out for our products hitting the selves.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

const theme = {
    background: '#eff7f0',
};

function WhatsNewInfo3() {
    return (
        <ThemeProvider theme={theme}>
            <InfoBox />
        </ThemeProvider>
    )
}

export default WhatsNewInfo3