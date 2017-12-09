import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage.jsx'
import Desk from './Desk/Desk.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/desk' component={Desk} />
      </Switch>
    </div>
  )
}

export default Main
