import React, { Component } from 'react'
import Input from '../UI/Input/Input'
import {Loader, Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'

class SignUpTab extends Component {
  state = {
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

  // componentDidMount() {
  //   if (!this.props.curating && this.props.authRedirectPath !== '/') {
  //       this.props.onSetAuthRedirectPath()
  //   }
  // }

  checkValidity(value, rules) {
      let isValid = true
      if (!rules) {
        return true
      }

      if (rules.required) {
          isValid = value.trim() !== '' & isValid
      }

      if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
      }

      if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
      }

      if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        isValid = pattern.test(value) && isValid
      }

      if (rules.isNumeric) {
        const pattern = /^\d+$/
        isValid = pattern.test(value) && isValid
      }

      return isValid
  }

  inputChangedHanler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }
    this.setState({controls: updatedControls})
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, true)
  }

  render() {

    const formElementsArray = []
    for (let key in this.state.controls) {
      formElementsArray.push({
          id: key,
          config: this.state.controls[key]
      })
    }

    let form = formElementsArray.map(formElement => (
      <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHanler(event, formElement.id)}
        label={formElement.config.elementConfig.label}
      />
    ))

    if (this.props.loading) {
      form = <Loader />
    }

    let errorMessage = null
    
    let authRedirect = null
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    return (
      <div>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button color='green'>Sign Up</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        // curating: state.curationBuilder.curating,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password) => dispatch(actions.auth(email, password, true)),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTab)
