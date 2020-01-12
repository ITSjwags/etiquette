import React from 'react'
import styled, { withTheme } from 'styled-components'

import Button from '../components/button'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = props => {
  const { theme } = props

  return (
    <Wrapper>
      <SEO title="Home" />

      <Grid>
        <Col1>
          <div>
            <Image src="nike-shoe.png" alt="Nike shoe" />
          </div>
          <Col1Img2>
            <Image src="overalls.png" alt="Overalls" />
          </Col1Img2>
          <div>
            <Image src="baseball-hat.png" alt="Baseball hat" />
          </div>
          <div>
            <Image src="shutterstock.png" alt="Shutterstock" />
          </div>
          <div>
            <Image src="spotify.png" alt="Spotify" />
          </div>
          <Col1Img6>
            <Image src="one-show.png" alt="One show" />
          </Col1Img6>
        </Col1>

        <Col2>
          <Box>
            <Title>
              ‘Tis The Season To Small Talk With Your Significant Other’s
              Co-Workers
            </Title>
            <ImageContainer>
              <Image src="logo@2x.png" alt="Plus One Etiquette" />
            </ImageContainer>
          </Box>
        </Col2>

        <Col3>
          <div>
            <Image src="ca.png" alt="CA" />
          </div>
          <Col3Img2>
            <Image src="glasses.png" alt="Glasses" />
          </Col3Img2>
          <div>
            <Image src="camera.png" alt="Camera" />
          </div>
        </Col3>
      </Grid>

      <Buttons>
        <Button
          background={theme.colors.brown}
          color={theme.colors.navy}
          onClick={() => console.log('click')}
          text="COPYWRITER"
        />
        <Button
          background={theme.colors.green}
          color={theme.colors.red}
          onClick={() => console.log('click')}
          text="ART DIRECTOR DESIGNER"
        />
        <Button
          background={theme.colors.red}
          color={theme.colors.green}
          onClick={() => console.log('click')}
          text="ACCOUNT MANAGER"
        />
        <Button
          background={theme.colors.blue}
          color={theme.colors.red}
          onClick={() => console.log('click')}
          text="CREATIVE DIRECTOR"
        />
        <Button
          background={theme.colors.green}
          color={theme.colors.navy}
          onClick={() => console.log('click')}
          text="PRODUCER"
        />
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`

const Col1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
const Col1Img2 = styled.div`
  grid-row: span 2;
`
const Col1Img6 = styled.div`
  grid-column: span 2;
`

const Col2 = styled.div``

const Col3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
const Col3Img2 = styled.div`
  grid-row: span 2;
`

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green};
  margin: 20px auto 0;
  position: relative;
  text-align: center;
  max-width: 1086px;
`

const Title = styled.h2`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.green};
  display: inline-block;
  font-size: 2.3vw;
  padding: 0 15px;
  position: relative;
  text-align: center;
  top: -1.4vw;

  @media (min-width: 980px) {
    font-size: 41px;
    top: -21px;
  }
`

const ImageContainer = styled.div`
  margin: 0 auto;
  padding: 35px;
  max-width: 735px;
  width: 100%;
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`

export default withTheme(IndexPage)
