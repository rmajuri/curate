import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Aux from '../Aux/Aux'
import { GlobalStyle } from '../../globalStyle'
import Routes from '../../Routes'
import BodyMargin from '../BodyMargin/BodyMargin'


const Layout = props => (
  <Aux>
    <GlobalStyle />
    <Toolbar />
    <BodyMargin>
      <Routes />
    </BodyMargin>
  </Aux>
)

export default Layout
