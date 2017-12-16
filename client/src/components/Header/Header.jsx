import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import SidebarLeft from '../SidebarLeft/SidebarLeft.jsx'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
    this.props.handleDrawer(this.state.open)
  }

  render () {
    return (
      <AppBar
        iconElementLeft={<IconButton onClick={ this.handleClick } ><NavigationMenu /></IconButton>}
        title='5 minutos'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
      />
    )
  }
}

export default Header
