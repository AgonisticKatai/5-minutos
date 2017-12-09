import React, { Component } from 'react'

import ReactHtmlParser from 'react-html-parser'

import Header from '../../components/Header/Header.jsx'
import { GetPosts } from '../../services/UserDataServices.js'

import './HomePage.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
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

  render () {
    const posts = this.state.posts.map(post => {
        return post.content
      })
    return (
      <div className='wrapper'>
        <div className="box header">
          <Header />
        </div>
        <div className="box sidebar">Sidebar</div>
        <div className="box sidebar2">Sidebar 2</div>
        <div className='content'>
          { ReactHtmlParser(posts) }
        </div>
        <div className="box footer">Footer</div>
      </div>
    )
  }
}

export default Home
