import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Menu } from "styled-icons/feather";
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function MaterialIcon(props) {
    const { classes } = props;
    return (
        <div>
            <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
                <AddIcon />
            </Fab>
        </div>
    )
}

MaterialIcon.propTypes = {
    variant: PropTypes.string,
    // children: PropTypes.node.isRequired
}

export default withStyles(styles)(MaterialIcon);
