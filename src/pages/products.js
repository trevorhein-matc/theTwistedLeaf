import React from 'react'
import Layout from '../layouts/layout'
import ProductCardDeck from "../components/ProductCards/ProductCardDeck"
import DisclaimerModal from "../components/Modal/DisclaimerModal"

const ProductsPage = () => (
  <Layout>
    <DisclaimerModal />
    <ProductCardDeck />
  </Layout>
)

export default ProductsPage