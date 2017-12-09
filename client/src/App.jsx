import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Main from './components/Main.jsx'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Main />
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
