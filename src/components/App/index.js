import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Router from '../../router'

const GlobalStyles = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    color: #444;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyles />
        <Router />
      </Fragment>
    </BrowserRouter>
  )
}

export default App
