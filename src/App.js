import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Aux from './hoc/Aux/Aux'
import {GlobalStyle} from './globalStyle'

class App extends Component {
  render() {
    return (
      <Aux>
      <GlobalStyle />
      <Toolbar />
      </Aux>
    );
  }
}

export default App;
