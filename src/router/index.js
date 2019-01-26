import React from 'react'
import { Switch } from 'react-router-dom'

import Feed from '../views/Feed'

import DefaultLayoutRoute from './components/DefaultLayoutRoute'

function Router() {
  return (
    <Switch>
      <DefaultLayoutRoute exact path="/" component={Feed} />
    </Switch>
  )
}

export default Router
