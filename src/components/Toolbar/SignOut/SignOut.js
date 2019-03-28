import React from 'react'
import { SignOutContainer, SignOutButton } from './style'
import {fireAuth} from '../../../firestore'
import {withRouter} from 'react-router-dom'

const SignOut = props => {

  const signOut = () => {
    fireAuth.signOut().catch(e => console.log(e))
    props.history.push('/')

  }

  return (
    <SignOutContainer>
      <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
    </SignOutContainer>
  )
}

export default withRouter(SignOut)