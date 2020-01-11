import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <ImageContainer>
      <Image />
    </ImageContainer>
  </Layout>
)

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 735px;
  width: 100%;
`

export default IndexPage
