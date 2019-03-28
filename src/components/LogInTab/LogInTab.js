import React, { Component } from 'react'
import styles from './LogInTab.module.css'
import AuthFunction from '../AuthFunction/AuthFunction'

class LogInTab extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email...',
          label: 'Email: ',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password...',
          label: 'Password: ',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    error: {}
  }
  render() {
    return <AuthFunction styles={styles} state={this.state} function="login" />
  }
}

export default LogInTab
