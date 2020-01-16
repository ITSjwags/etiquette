import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = props => {
  const { alt, src } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 10000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(edge => {
          // doing this because images coming back from cms have a slash in front of url
          const matched = src.split('/')[1] ? src.split('/')[1] : src

          return edge.node.relativePath === matched
        })

        if (!image) {
          return null
        }

        return (
          <Img
            alt={alt}
            fluid={image.node.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain' }}
            style={{ maxHeight: '100%' }}
            loading="lazy"
          />
        )
      }}
    />
  )
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Image
