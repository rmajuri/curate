import React from 'react'
import LogInTab from '../../components/LogInTab/LogInTab'
import SignUpTab from '../../components/SignUpTab/SignUpTab'
import styles from './Auth.module.css'
import { useState, useEffect } from 'react'
import {fireAuth} from '../../firestore'

const Auth = props => {
  const [selectedTab, setSelectedTab] = useState('login')
  const [hasUser, setHasUser] = useState(false)
  let unsubscribe

  const handleActiveTab = tab => {
    setSelectedTab(tab)
  }

  const watchForUser = () => {
    fireAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is signed in')
        setHasUser(true)
      } else {
        console.log('user is signed out')
        setHasUser(false)
      }
    })
  }

  useEffect( () => {
    unsubscribe = watchForUser() 
    return () => unsubscribe()
  }, [])
  

  return (
    hasUser ? <h2>You're Logged In!</h2> :
    <div className={styles.contentMargin}>
      <div className={styles.tab}>
        <div className={styles.menu}>
          <p
            onClick={() => handleActiveTab('login')}
            className={ selectedTab === 'login' ? styles.menuItemSelected : styles.menuItem}
          >
            Log In
          </p>
          <p
            onClick={() => handleActiveTab('signup')}
            className={ selectedTab === 'signup' ? styles.menuItemSelected : styles.menuItem}
            style={{ paddingLeft: '15px' }}
          >
            Sign Up
          </p>
        </div>
        {selectedTab === 'login' ? <LogInTab /> : <SignUpTab />}
      </div>
    </div> 
  )
}

export default Auth
