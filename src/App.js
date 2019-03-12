import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Routes from './Routes'
import Aux from './hoc/Aux/Aux'

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
        <Routes />
      </Aux>
    )
  }
}

export default App
