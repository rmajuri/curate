import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './containers/Auth/Auth'

const Routes = props => {
  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes