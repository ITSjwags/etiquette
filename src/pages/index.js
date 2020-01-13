import React from 'react'
import styled, { withTheme } from 'styled-components'

import Button from '../components/button'
import Image from '../components/image'
import SEO from '../components/seo'

import bannerBG from '../images/bannerBG.png'

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
          <Col2Header>
            <div>
              <Image src="whiskey.png" alt="Whiskey" />
            </div>
            <div>
              <Image src="vans.png" alt="Vans" />
            </div>
            <div>
              <Image src="slack.png" alt="Slack" />
            </div>
            <Col2Img4>
              <Col2Img4Top>
                <Image src="premium.png" alt="Premium" />
                <Image src="fishbowl.png" alt="Fish Bowl" />
              </Col2Img4Top>
              <Col2Img4Bottom>
                <Image src="small-hat.png" alt="Hat" />
                <Image src="computer.png" alt="Computer" />
              </Col2Img4Bottom>
            </Col2Img4>
          </Col2Header>

          <Box>
            <Title>
              ‘Tis The Season To Small Talk With Your Significant Other’s
              Co-Workers
            </Title>
            <ImageContainer>
              <Image src="logo@2x.png" alt="Plus One Etiquette" />
            </ImageContainer>
            <Banner>A GUIDE TO MINGLING WITH ADVERTISING TYPES</Banner>
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
          <Col3Img3>
            <Image src="apple-watch.png" alt="Apple watch" />
          </Col3Img3>
          <Col3Img4>
            <Image src="vape.png" alt="Vape" />
          </Col3Img4>
          <div>
            <Image src="controlZ.png" alt="Control Z" />
          </div>
          <Col3Img6>
            <Image src="pencil.png" alt="D&AD Pencil" />
          </Col3Img6>
          <div>
            <Image src="birkenstock.png" alt="Birkenstock" />
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
  display: grid;
  min-height: 100vh;
  padding: 30px;

  @media (min-width: 769px) {
    grid-template-rows: 6fr 1fr;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`

const Col1 = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
const Col1Img2 = styled.div`
  grid-row: span 2;
`
const Col1Img6 = styled.div`
  grid-column: span 2;
`

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
`
const Col2Header = styled.div`
  display: grid;
  grid-template-columns: 0.91fr 1fr 0.82fr 0.8fr 0.8fr;
  grid-gap: 15px;
`
const Col2Img4 = styled.div`
  display: grid;
  grid-column: span 2;
  grid-gap: 15px;
  grid-template-rows: 1fr 1.75fr;
`
const Col2Img4Top = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  grid-gap: 10px;
`
const Col2Img4Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-gap: 10px;
`

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green};
  display: grid;
  flex: 1;
  margin: 30px auto;
  place-items: center;
  position: relative;
  width: 100%;
`

const Title = styled.h2`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.green};
  display: inline-block;
  font-size: 4vw;
  left: 50%;
  padding: 0 15px;
  position: absolute;
  top: -1.3vw;
  transform: translateX(-50%);
  white-space: nowrap;

  @media (min-width: 769px) {
    font-size: 2.5vw;
  }
`

const ImageContainer = styled.div`
  margin: 0 auto;
  padding: 15px 5vw 30px;
  width: 100%;
`

const Banner = styled.h3`
  background: url(${bannerBG}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.navy};
  display: inline-block;
  font-size: 4vw;
  left: 50%;
  padding: 5px 50px;
  position: absolute;
  bottom: -3.5vw;
  transform: translateX(-50%);
  white-space: nowrap;

  @media (min-width: 769px) {
    font-size: 2.5vw;
    bottom: -1.9vw;
  }
`

const Col3 = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
const Col3Img2 = styled.div`
  grid-row: span 2;
`
const Col3Img3 = styled.div`
  grid-column: span 2;
`
const Col3Img4 = styled.div`
  grid-row: span 2;
`
const Col3Img6 = styled.div`
  grid-row: span 2;
`

const Buttons = styled.div`
  display: grid;
  grid-gap: 15px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export default withTheme(IndexPage)
