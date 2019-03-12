import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    )
  }
}

export default App
