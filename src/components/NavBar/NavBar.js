import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'gatsby';
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import StoreIcon from "@material-ui/icons/Store";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'typeface-roboto';

const drawerWidth = 200;

const styles = theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("xl")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("xl")]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
        background: 'linear-gradient(45deg, #032102 30%, #024700 90%)'
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up("xl")]: {
          display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * .25
    },
    mainLink: {
      textDecoration: "none"
    }
});

function ChooseIcon(props) {
  const iconChoice = props.iconChoice;
  switch (iconChoice) {
    case "products":
      return (
        <div>
          <StoreIcon />
        </div>
      );
    case "sources":
      return (
        <div>
          <ZoomIn />
        </div>
      );
    case "about":
      return (
        <div>
          <InfoIcon />
        </div>
      );
    case "contact":
      return (
        <div>
          <MailIcon />
        </div>
      );
    default:
      return <CollectionsBookmark />;
  }
}
  
class NavBar extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />         
        <Divider />
        <List>
          {[
            { text: "Products", icon: "products", link: '/products' },
            { text: "Information", icon: "about", link: '/about' },
            { text: "Contact Us", icon: "contact", link: '/contact' }
          ].map((text, index) => (
            <ListItem button key={index} component={ Link } to={text.link}>
              <ListItemIcon>
                <ChooseIcon iconChoice={text.icon} />
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: "Sources", icon: "sources", link: '/sources' }
          ].map((text, index) => (
            <ListItem button key={index} component={ Link } to={text.link}>
              <ListItemIcon>
                <ChooseIcon iconChoice={text.icon} />
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <StaticQuery 
          query={graphql`
              query SiteTitleSearchQuery {
                  site {
                      siteMetadata {
                          title
                      }
                  }
              }
          `}
          render={data => (
              <div>
                  <Helmet
                      title="The Twisted Leaf"
                      meta={[
                          { name: 'description', content: 'Just a Test' },
                          { name: 'keywords', content: 'sample of something' },
                      ]}
                  >
                      <html lang="en" />
                  </Helmet>
                  <div className={classes.root}>
                      <CssBaseline />
                      <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                          <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                          >
                            <MenuIcon />
                          </IconButton>
                          <Typography variant="h6" color="inherit" noWrap component={ Link } to='/' className={classes.mainLink}>
                          The Twisted Leaf
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <nav className={classes.drawer}>
                        <Hidden xlUp implementation="css">
                          <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                              paper: classes.drawerPaper
                            }}
                            ModalProps={{
                              keepMounted: true // Better open performance on mobile.
                            }}
                          >
                            {drawer}
                          </Drawer>
                        </Hidden>
                        <Hidden lgDown implementation="css">
                          <Drawer
                            classes={{
                              paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                          >
                            {drawer}
                          </Drawer>
                        </Hidden>
                      </nav>
                        <main className={classes.content}>
                        <div className={classes.toolbar} />
                            { children }
                        </main>
                    </div>
              </div>
          )}
      />
  );
}
}

NavBar.propTypes = {
classes: PropTypes.object.isRequired,
container: PropTypes.object,
theme: PropTypes.object.isRequired
// children: PropTypes.node.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);