import React, { Component } from 'react'

import { List, ListItem, Drawer, ActionHome, ContentInbox, ContentDrafts, ContentSend } from 'material-ui'

import './SidebarLeft.css'

class SidebarLeft extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <Drawer open={this.props.handleOpen} className='drawer-content' >
        <List>
          <ListItem primaryText='Home' leftIcon={<ActionHome />} />
          <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
          <ListItem
            primaryText='Inbox'
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText='Starred'
                leftIcon={<ActionHome />}
              />,
              <ListItem
                key={2}
                primaryText='Sent Mail'
                leftIcon={<ContentSend />}
                disabled={true}
                nestedItems={[
                  <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />
                ]}
              />,
              <ListItem
                key={3}
                primaryText='Inbox'
                leftIcon={<ContentInbox />}
                nestedItems={[
                  <ListItem key={1} primaryText='Drafts' leftIcon={<ContentDrafts />} />
                ]}
              />
            ]}
          />
        </List>
      </Drawer>
    )
  }
}

export default SidebarLeft
