import React from 'react'
import { SignOutContainer, SignOutButton } from './style'
import {fireAuth} from '../../../firestore'

const SignOut = props => {

  const signOut = () => {
    fireAuth.signOut().catch(e => console.log(e))
  }

  return (
    <SignOutContainer>
      <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
    </SignOutContainer>
  )
}

export default SignOut