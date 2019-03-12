import React from 'react'
import { Tab } from 'semantic-ui-react'
import LogInTab from '../../components/LogInTab/LogInTab'
import SignUpTab from '../../components/SignUpTab/SignUpTab'

const Auth = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane>{LogInTab}</Tab.Pane> },
        { menuItem: 'Sign Up', render: () => <Tab.Pane>{SignUpTab}</Tab.Pane> },
      ]
  return (
    <Tab panes={panes} />
  )
}

export default Auth