import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Box>
      <Title>
        ‘Tis The Season To Small Talk With Your Significant Other’s Co-Workers
      </Title>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Box>
  </Layout>
)

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green};
  margin: 50px auto 0;
  padding: 35px;
  position: relative;
  text-align: center;
  max-width: 1086px;
`

const Title = styled.h2`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.green};
  display: inline-block;
  font-size: 28px;
  padding: 0 35px;
  position: relative;
  text-align: center;
  top: calc(-13px + -35px);
`

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 735px;
  width: 100%;
`

export default IndexPage
