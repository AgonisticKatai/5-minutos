import React, { Component } from 'react'

import CKEditor from 'react-ckeditor-component'
import RaisedButton from 'material-ui/RaisedButton'

import { AddPost } from '../../services/UserDataServices.js'

class Desk extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default Title',
      content: ''
    }
  }

  updateContent = newContent => {
    this.setState({
      content: newContent
    })
  }

  onChange = e => {
    const newContent = e.editor.getData()
    this.setState({
      content: newContent
    })
  }

  handleClick = async () => {
    const { title, content } = this.state
    await AddPost(title, content)
  }

  render () {
    return (
      <div>
        <CKEditor
          activeClass='p10'
          content={this.state.content}
          events={{
            'blur': this.onBlur,
            'afterPaste': this.afterPaste,
            'change': this.onChange
          }}
        />
        <RaisedButton
          label="Add post"
          primary={true}
          onClick={this.handleClick} />   
      </div>

    )
  }
}

export default Desk
