import React from 'react'
import Layout from '../layouts/layout'
import Carousel from "../components/Carousel/Carousel"
import MainPageCardDeck from "../components/MainPageCards/MainPageCardDeck"

const IndexPage = () => (
  <Layout>
    <Carousel />
    <MainPageCardDeck />
  </Layout>
)

export default IndexPage
