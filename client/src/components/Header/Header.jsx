import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render () {
    return (
      <h1>Header</h1>
    )
  }
}

export default Header
