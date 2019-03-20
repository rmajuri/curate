import React from 'react'
import styles from './SignUpTab.module.css'
import AuthFunction from '../AuthFunction/AuthFunction'

const SignUpTab = props => {
  const state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email...',
          label: 'Email: '
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
          label: 'Password: '
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
  }

  return(
   <AuthFunction styles={styles} state={state} function='signup' />
  )

}

export default SignUpTab
