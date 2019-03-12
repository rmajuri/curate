import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import * as actions from './store/actions/index'

class Routes extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
