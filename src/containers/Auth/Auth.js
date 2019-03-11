import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Log In', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Sign Up', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
]

const Auth = props => {
    const panes = [
        { menuItem: 'Log In', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: 'Sign Up', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      ]
  return (
    <Tab panes={panes} />
  )
}