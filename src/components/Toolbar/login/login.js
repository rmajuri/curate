import React from 'react'
import { NavLink } from 'react-router-dom'
import { LoginLinks, LinkContainer, Link } from './style'
import classes from './Login.css'

const Login = props => (
  <LoginLinks>
    <LinkContainer>
      <Link style={{paddingRight: '5px'}}>Log In</Link>
    </LinkContainer>
    |
    <LinkContainer>
      <Link style={{paddingLeft: '5px'}}>Sign Up</Link>
    </LinkContainer>
  </LoginLinks>
)

export default Login
