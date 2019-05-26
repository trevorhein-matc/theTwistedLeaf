import React from 'react'
import { Box } from 'rebass'
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.background,
        border: 0,
        fontSize: '2em',
        borderRadius: 0,
        boxShadow: '0 3px 5px 0px #6c6c6d',
        color: 'white',
        display: "flex"
    },
}))

function BannerBox() {
    const classes = useStyles();
    return (
        <Box className={classes.root}
            p={3}
        >
            <Typography
                align='left'
                color='inherit'
                variant='h5'
            >
                About
            </Typography>
        </Box>
    )
}

const theme = {
    background: 'linear-gradient(45deg, #032102 20%, #eff7f0 90%)',
};

function AboutBanner() {
    return (
        <ThemeProvider theme={theme}>
            <BannerBox />
        </ThemeProvider>
    )
}

export default AboutBanner