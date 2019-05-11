import React from 'react'
import Layout from '../layouts/layout'
// import { Box, Image } from 'rebass'
import AboutHeadBlock from '../components/AboutHeadBlock'
import { graphql } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <AboutHeadBlock />


  </Layout>
)

export default AboutPage

export const query = graphql`
query aboutPageQuery {
  allContentfulTwistedAboutSection (
    sort: { fields: [updatedAt], order: DESC }
  ) {
    edges {
      node {
        id
        title
      }
    }
  }
}
`