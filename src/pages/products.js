import React from 'react'
import Layout from '../layouts/layout'
// import ProductCardDeck from "../components/ProductCards/ProductCardDeck"

import ProductCard from '../components/ProductCard'
import DisclaimerModal from "../components/Modal/DisclaimerModal"
import GridLayout from '../components/GridLayout';
import Grid from '@material-ui/core/Grid';
import { graphql } from 'gatsby';

const ProductsPage = ({ data }) => (
  <Layout>
    <DisclaimerModal />
    <GridLayout>
      {data.allContentfulTwistedProductCard.edges.map((edge) => (
        <Grid item xs={12} sm={6} md={6} key={edge.node.id}>
          <ProductCard data={edge.node} />
        </Grid>
      ))}
    </GridLayout>
  </Layout>
)

export default ProductsPage

export const query = graphql`
query productCardsQuery {
    allContentfulTwistedProductCard (
        sort: { fields: [updated], order: DESC }
    ) {
        edges {
        node {
            id
            Title
            Description
            Ingredients
            Price
            varieties
            updated (formatString: "DD MMMM YYYY")
            tags
            Image {
                fluid {
                src
            }
            }
        }
        }
    }
}
`