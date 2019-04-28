import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import CarouselSlides from '../Carousel/CarouselSlides'

const carouselSlides = [
    {
        name: 'carousel1'
    },
    {
        name: 'carousel2'
    },
    {
        name: 'carousel3'
    },
    {
        name: 'carousel4'
    },
];

const styles = theme => ({
    root: {
        flexGrow:1,
    },
});

class Carousel extends React.Component {
    state = {
        activeSlide: 0,
    };

    nextSlide = () => {
        this.setState(prevState => ({
            activeSlide: prevState.activeSlide + 1,
        }));
    };

    prevSlide = () => {
        this.setState(prevState => ({
            activeSlide: prevState.activeSlide - 1,
        }));
    };

    handleSlideChange = activeSlide => {
        this.setState({ activeSlide });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeSlide } = this.state;
        const maxSlides = carouselSlides.length;

        return (
            <div className={classes.root}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeSlide}
                    onChangeIndex={this.handleSlideChange}
                    enableMouseEvents
                >
                    {carouselSlides.map((slide, index) => (
                        <div key={slide.name}>
                            {Math.abs(activeSlide - index) <= 2 ? (
                                <CarouselSlides data={slide} />
                            ) : null}
                        </div>
                    ))}
                </SwipeableViews>
                <Button size="large" onClick={this.prevSlide} disabled={activeSlide === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                <Button size="large" onClick={this.nextSlide} disabled={activeSlide === maxSlides - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            </div>
        )
    }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);