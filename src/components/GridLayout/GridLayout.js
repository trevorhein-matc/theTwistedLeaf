import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: 20
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });

class GridLayout extends React.Component {
    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {children}
                </Grid>
            </div>
        )
    } 
}

  GridLayout.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(GridLayout);