import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  )
}

export default Main
