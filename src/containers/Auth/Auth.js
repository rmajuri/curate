import React from 'react'
import LogInTab from '../../components/LogInTab/LogInTab'
import SignUpTab from '../../components/SignUpTab/SignUpTab'
import styles from './Auth.module.css'
import { useState } from 'react'

const Auth = props => {
  const [selectedTab, setSelectedTab] = useState('login')

  const handleActiveTab = tab => {
    setSelectedTab(tab)
  }

  return (
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
  )
}

export default Auth
