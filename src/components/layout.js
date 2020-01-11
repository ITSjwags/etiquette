import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../components/global-styles'
import theme from '../theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
