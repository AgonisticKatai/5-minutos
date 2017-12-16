import React, { Component } from 'react'

import ReactHtmlParser from 'react-html-parser'

import Header from '../../components/Header/Header.jsx'
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft.jsx'
import { GetPosts } from '../../services/UserDataServices.js'
import Login from '../../components/Login/Login.jsx'

import './HomePage.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      posts: [{
        title: '',
        content: '',
        createdAt: ''
      }]
    }
  }

  componentWillMount = async () => {
    const { posts }= await GetPosts()
    console.log(posts)
    this.setState({
      posts: posts.map(post => {
        return ({
          title: post.title,
          content: post.content,
          createdAt: post.createdAt
        })
      })
    })
  }

  handleDrawer = (props) => this.setState({ open: !props })

  render () {
    const posts = this.state.posts.map(post => {
        return post.content
      })
    return (
      <div className='wrapper'>
        <div className='header'>
          <Header handleDrawer={ this.handleDrawer.bind(this) } />
        </div>
        <div className='box sidebar'>
          <SidebarLeft handleOpen={ this.state.open } />
        </div>
        <div className='box sidebar2'>Sidebar 2</div>
        <div className='content'>
          { ReactHtmlParser(posts) }
        </div>
        <div className='box footer'>Footer</div>
        <Login />
      </div>
    )
  }
}

export default Home
