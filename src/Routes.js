import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Auth from './containers/Auth/Auth'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    )
  }
}



export default withRouter(Routes)
