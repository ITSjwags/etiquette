import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Button from '../components/button'
import Image from '../components/image'
import SEO from '../components/seo'
import copy from '../copy'

const IndexPage = props => {
  const { theme } = props
  const [activeCategory, setActiveCategory] = useState('default')
  const [answerNumber, setAnswerNumber] = useState(0)

  const onClickButton = category => {
    const totalCategories = copy[category].content.length
    const nextNumber =
      answerNumber >= totalCategories - 1 ? 0 : answerNumber + 1

    setActiveCategory(category)

    if (category === activeCategory) {
      setAnswerNumber(nextNumber)
    }
  }

  return (
    <Wrapper>
      <SEO title="Home" />

      <Grid>
        <Col1>
          <Col1Img>
            <Image src="nike-shoe.png" alt="Nike shoe" />
          </Col1Img>
          <Col1Img>
            <Image src="candy-cane.png" alt="Candy cane" />
          </Col1Img>
          <Col1Img>
            <Image src="shutterstock.png" alt="Shutterstock" />
          </Col1Img>
          <Col1Img>
            <Image src="overalls.png" alt="Overalls" />
          </Col1Img>
          <Col1Img>
            <Image src="spotify.png" alt="Spotify" />
          </Col1Img>
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
                <Image src="baseball-hat.png" alt="Hat" />
                <Image src="computer.png" alt="Computer" />
              </Col2Img4Bottom>
            </Col2Img4>
          </Col2Header>

          <Box activeCategory={activeCategory}>
            <Title activeCategory={activeCategory}>
              {copy[activeCategory].title}
            </Title>
            <Content activeCategory={activeCategory}>
              <ImageContainer activeCategory={activeCategory}>
                <Image
                  src={
                    copy[activeCategory].content.map(item => item.icon)[
                      answerNumber
                    ]
                  }
                  alt={
                    copy[activeCategory].content.map(item => item.alt)[
                      answerNumber
                    ]
                  }
                />
              </ImageContainer>
              {copy[activeCategory].content.map(item => item.title) && (
                <ContentTitle activeCategory={activeCategory}>
                  {
                    copy[activeCategory].content.map(item => item.title)[
                      answerNumber
                    ]
                  }
                </ContentTitle>
              )}
            </Content>
            <Banner activeCategory={activeCategory}>
              <Image
                src={copy[activeCategory].bannerBG}
                alt="Banner background"
              />
              <BannerTitle activeCategory={activeCategory}>
                {
                  copy[activeCategory].content.map(item => item.banner)[
                    answerNumber
                  ]
                }
              </BannerTitle>
            </Banner>
          </Box>
        </Col2>

        <Col3>
          <Col3Img1>
            <div>
              <Image src="ca.png" alt="CA" />
            </div>
            <div>
              <Image src="lightbulb.png" alt="Lightbulb" />
            </div>
            <Col3Img1SpanRow>
              <Image src="glasses.png" alt="Glasses" />
            </Col3Img1SpanRow>
            <Col3Img1SpanCol>
              <Image src="camera.png" alt="Camera" />
            </Col3Img1SpanCol>
          </Col3Img1>
          <Col3Img2>
            <Image src="apple-watch.png" alt="Apple watch" />
          </Col3Img2>
          <div>
            <Image src="vape.png" alt="Vape" />
          </div>
          <div>
            <Image src="controlZ.png" alt="Control Z" />
          </div>
          <div>
            <Image src="holly.png" alt="Holly" />
          </div>
          <div>
            <Image src="pencil.png" alt="D&AD Pencil" />
          </div>
        </Col3>
      </Grid>

      <Buttons>
        <Button
          background={theme.colors.brown}
          color={theme.colors.navy}
          onClick={() => onClickButton('copywriter')}
          text="COPYWRITER"
        />
        <Button
          background={theme.colors.green}
          color={theme.colors.red}
          onClick={() => onClickButton('ad')}
          text="ART DIRECTOR DESIGNER"
        />
        <Button
          background={theme.colors.red}
          color={theme.colors.green}
          onClick={() => onClickButton('am')}
          text="ACCOUNT MANAGER"
        />
        <Button
          background={theme.colors.blue}
          color={theme.colors.red}
          onClick={() => onClickButton('cd')}
          text="CREATIVE DIRECTOR"
        />
        <Button
          background={theme.colors.green}
          color={theme.colors.navy}
          onClick={() => onClickButton('producer')}
          text="PRODUCER"
        />
      </Buttons>

      <Bottom>
        <BottomImage>
          <Image src="hand.png" alt="Hand" />
        </BottomImage>
        <BottomText>CHOOSE YOUR MINGLING MATCH</BottomText>
        <BottomImage>
          <Image src="hand-right.png" alt="Hand" />
        </BottomImage>
      </Bottom>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px 30px 0 30px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-bottom: 15px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`

const Col1 = styled.div`
  display: none;

  @media (min-width: 769px) {
    break-inside: avoid;
    column-count: 2;
    column-gap: 15px;
    display: block;
  }
`
const Col1Img = styled.div`
  break-inside: avoid;
  padding-bottom: 15px;
`
const Col1Img6 = styled(Col1Img)`
  column-span: all;
`

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
`
const Col2Header = styled.div`
  display: grid;
  grid-template-columns: 0.84fr 0.9fr 0.74fr 0.7fr 0.7fr;
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
  border: 1px solid
    ${({ activeCategory, theme }) => {
      if (activeCategory === 'copywriter') return theme.colors.brown
      if (activeCategory === 'ad') return theme.colors.green
      if (activeCategory === 'producer') return theme.colors.green
      return theme.colors.red
    }};
  display: grid;
  flex: 1;
  margin: 25px auto;
  place-items: center;
  position: relative;
  width: 100%;
`

const Title = styled.h2`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ activeCategory, theme }) => {
    if (activeCategory === 'copywriter') return theme.colors.brown
    if (activeCategory === 'ad') return theme.colors.green
    if (activeCategory === 'producer') return theme.colors.green
    return theme.colors.red
  }};
  display: inline-block;
  font-size: 3.8vw;
  left: 50%;
  padding: 0 15px;
  position: absolute;
  top: -1.7vw;
  transform: translateX(-50%);
  white-space: nowrap;

  @media (min-width: 769px) {
    font-size: 2.5vw;
  }
`

const Content = styled.div`
  padding: 20px ${({ activeCategory }) => (activeCategory ? '4vw' : '5vw')} 30px;
  width: 100%;
`
const ContentTitle = styled.p`
  color: ${({ activeCategory, theme }) => {
    if (activeCategory === 'copywriter') return theme.colors.brown
    if (activeCategory === 'am') return theme.colors.green
    if (activeCategory === 'cd') return theme.colors.blue
    if (activeCategory === 'producer') return theme.colors.green
    return theme.colors.red
  }};
  font-size: 4vw;
  line-height: 1.2;
  text-align: center;

  @media (min-width: 769px) {
    font-size: 2.5vw;
  }
`

const ImageContainer = styled.div`
  display: grid;
  height: ${({ activeCategory }) => {
    if (activeCategory === 'default') return '100%'
    return '20vh'
  }};
  max-height: ${({ activeCategory }) => {
    if (activeCategory === 'default') return '100%'
    return '100%'
  }};
  margin: 0 auto 10px;
  max-width: ${({ activeCategory }) => {
    if (activeCategory === 'default') return '100%'
    return '30%'
  }};
`

const Banner = styled.div`
  bottom: -2vw;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: 70%;
`
const BannerTitle = styled.h3`
  color: ${({ activeCategory, theme }) => {
    if (activeCategory === 'ad') return theme.colors.red
    if (activeCategory === 'am') return theme.colors.green
    if (activeCategory === 'cd') return theme.colors.red
    return theme.colors.navy
  }};
  font-size: 3.9vw;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -57%);
  white-space: nowrap;

  @media (min-width: 769px) {
    font-size: 2.5vw;
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
const Col3Img1 = styled.div`
  display: grid;
  grid-column: span 2;
  grid-gap: 5px;
  grid-template-columns: 1fr 0.9fr 1.13fr;
`
const Col3Img1SpanRow = styled.div`
  grid-row: span 2;
`
const Col3Img1SpanCol = styled.div`
  grid-column: span 2;
`
const Col3Img2 = styled.div`
  grid-column: span 2;
`

const Buttons = styled.div`
  display: grid;
  grid-gap: 10px;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    grid-gap: 15px;
    grid-template-columns: repeat(5, 1fr);
  }
`

const Bottom = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 35px auto 35px;
  place-content: center;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.colors.white};
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% + 60px);
  }
`
const BottomText = styled.h2`
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: 4vw;
  padding: 10px 0;
  position: relative;

  @media (min-width: 769px) {
    font-size: 2vw;
  }
`

const BottomImage = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  position: relative;
  padding: 0 10px;
`

export default withTheme(IndexPage)
