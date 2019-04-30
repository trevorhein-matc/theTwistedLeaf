import React from 'react'
import Layout from '../layouts/layout'
import Carousel from "../components/Carousel/Carousel"
import MainPageCardDeck from "../components/MainPageCards/MainPageCardDeck"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <Carousel data={data.allContentfulTwistedJumboCard.edges} />
    <MainPageCardDeck />
  </Layout>
)

export default IndexPage

export const query = graphql`
query mainCarouselQuery {
    allContentfulTwistedJumboCard (
        sort: { fields: [updated], order: DESC }
    ) {
        edges {
            node {
                id
                title
                description
                updated
                image {
                  fluid {
                      src
                  }
                }
            }
        }
    }
}
`
