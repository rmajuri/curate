import React from 'react'
import { Link } from 'react-router-dom'
import { LoginLinks, LinkContainer, LinkStyle } from './style'
import SignOut from '../SignOut/SignOut'

const Login = props => (
  <LoginLinks>
    <LinkContainer>
      <Link to={`/auth`} style={{ paddingRight: '5px' }}>
        <LinkStyle> Log In</LinkStyle>
      </Link>
    </LinkContainer>
    <SignOut />
  </LoginLinks>
)

export default Login
