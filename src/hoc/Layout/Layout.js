import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Aux from '../Aux/Aux'
import {GlobalStyle} from '../../globalStyle'

const Layout = props => (
  <Aux>
    <GlobalStyle />
    <Toolbar />
  </Aux>
)

export default Layout