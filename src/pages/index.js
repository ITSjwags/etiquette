import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Button from '../components/button'
import Image from '../components/image'
import SEO from '../components/seo'
import copy from '../answers'

const IndexPage = props => {
  const { theme } = props
  const [activeCategory, setActiveCategory] = useState('default')
  const [answerNumber, setAnswerNumber] = useState(0)

  const onClickButton = category => {
    const totalCategories = copy[category].answers.length
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
          <Col1Left>
            <Image src="nike-shoe.png" alt="Nike shoe" />
            <Image src="candy-cane.png" alt="Candy cane" />
            <Image src="shutterstock.png" alt="Shutterstock" />
          </Col1Left>
          <Col1Right>
            <Image src="overalls.png" alt="Overalls" />
            <Image src="spotify.png" alt="Spotify" />
          </Col1Right>
          <Col1Img3>
            <Image src="one-show.png" alt="One show" />
          </Col1Img3>
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
                    copy[activeCategory].answers.map(item => item.icon)[
                      answerNumber
                    ]
                  }
                  alt={
                    copy[activeCategory].answers.map(item => item.alt)[
                      answerNumber
                    ]
                  }
                />
              </ImageContainer>
              {copy[activeCategory].answers.map(item => item.title) && (
                <ContentTitle activeCategory={activeCategory}>
                  {
                    copy[activeCategory].answers.map(item => item.title)[
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
                  copy[activeCategory].answers.map(item => item.banner)[
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

      <Row>
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
            <MobileOnly>
              <Image src="hand-right.png" alt="Hand" />
            </MobileOnly>
            <DesktopOnly>
              <Image src="hand.png" alt="Hand" />
            </DesktopOnly>
          </BottomImage>
          <BottomText>CHOOSE YOUR MINGLING MATCH</BottomText>
          <BottomImage>
            <MobileOnly>
              <Image src="hand.png" alt="Hand" />
            </MobileOnly>
            <DesktopOnly>
              <Image src="hand-right.png" alt="Hand" />
            </DesktopOnly>
          </BottomImage>
        </Bottom>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 15px 15px 0 15px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 3fr 1fr;
    margin-bottom: 15px;
  }
`

const Col1 = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 15px;
  }
`
const Col1Img3 = styled.div`
  grid-column: span 2;
`
const Col1Left = styled.div`
  display: grid;
  grid-gap: 15px;
`
const Col1Right = styled.div`
  display: grid;
  grid-gap: 15px;
`

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
`
const Col2Header = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 0.7fr 0.57fr 0.65fr 0.65fr;
  grid-gap: 15px;
`
const Col2Img4 = styled.div`
  display: grid;
  grid-column: span 2;
  grid-gap: 5px;
  grid-template-rows: 0.25fr 1fr;
`
const Col2Img4Top = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  grid-gap: 10px;
`
const Col2Img4Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

const Buttons = styled.div`
  display: grid;
  grid-gap: 10px;
  order: 2;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    grid-gap: 15px;
    grid-template-columns: repeat(5, 1fr);
    order: 1;
  }
`

const Bottom = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 35px auto 35px;
  margin-bottom: 20px;
  order: 1;
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

  @media (min-width: 769px) {
    margin-bottom: 0;
    order: 2;
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
  transform: rotate(180deg);

  @media (min-width: 769px) {
    font-size: 2vw;
    transform: rotate(0deg);
  }
`

const MobileOnly = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`
const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`

export default withTheme(IndexPage)
