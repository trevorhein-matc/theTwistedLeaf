import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import { ThemeProvider } from 'styled-components'
import { Green as theme } from '../themes/Green'
import { Footer, Main } from '../components/Element'
// import { Masthead, MastheadDrawer, DefaultLayout } from '../components/Masthead'
import 'typeface-roboto';
import NavBar from '../components/NavBar'

export default class Layout extends React.Component {

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div>
              <NavBar>
              <Main mt="-2px">
                {children}
              </Main>
              <Footer>
                © {new Date().getFullYear()}, Enjoy 
                {` `}
                <a href="https://www.tbd.org">The Twisted Leaf</a>
              </Footer>
              </NavBar>
            </div>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}