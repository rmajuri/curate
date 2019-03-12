import React from 'react'
import { Tab } from 'semantic-ui-react'

const Auth = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane>Log In</Tab.Pane> },
        { menuItem: 'Sign Up', render: () => <Tab.Pane>Sign Up</Tab.Pane> },
      ]
  return (
    <Tab panes={panes} />
  )
}

export default Auth