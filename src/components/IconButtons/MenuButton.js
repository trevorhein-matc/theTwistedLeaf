import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Menu';

const styles = {
    margin: {
        margin: '0em',
    },
    extendedIcon: {
        marginRight: 'auto',
    },
};

class MenuButton extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Fab color="primary" aria-label="Add" className={classes.margin}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

// function MenuButton(props) {
//     const { classes } = props;
//     return (

//     )
// }

MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButton);