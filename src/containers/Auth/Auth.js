import React from 'react'
import { Tab } from 'semantic-ui-react'
import LogInTab from '../../components/LogInTab/LogInTab'
import SignUpTab from '../../components/SignUpTab/SignUpTab'
import styles from './Auth.module.css'

const Auth = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane><LogInTab /></Tab.Pane> },
        { menuItem: 'Sign Up', render: () => <Tab.Pane><SignUpTab /></Tab.Pane> },
      ]
  return (
    <div className={styles.contentMargin}>
      <Tab panes={panes} className={styles.tab} />
    </div>
  )
}

export default Auth