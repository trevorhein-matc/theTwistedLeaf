import React from 'react'
import Layout from '../layouts/layout'
import Carousel from "../components/Carousel/Carousel"
import MainPageCardDeck from "../components/MainPageCards/MainPageCardDeck"
import { graphql } from 'gatsby'
import WhatsNew from '../components/WhatsNewSection/WhatsNew'
import AboutSection from '../components/AboutSection/AboutSection'

const IndexPage = ({ data }) => (
  <Layout>
    <Carousel data={data.allContentfulTwistedJumboCard.edges} />
    <WhatsNew />
    <AboutSection />
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
