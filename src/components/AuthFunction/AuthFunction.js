import React, {Component} from 'react'
import Input from '../UI/Input/Input'
import {Loader, Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'

class AuthFunction extends Component {

  state = this.props.state

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

  this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.props.function)
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

  const buttonText = this.props.function === 'signup' ? 'Sign Up' : 'Log In'
  const headingText = this.props.function === 'signup' ? 'Please join us.' : 'Welcome back, friend.' 
  

  return (
    <div>
      {authRedirect}
      {errorMessage}
      <h3 className={this.props.styles.heading}>{headingText}</h3>
      <form onSubmit={this.submitHandler} className={this.props.form}>
        {form}
        <Button className={this.props.styles.button}>{buttonText}</Button>
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
    onAuth: (email, password, authFunc) => dispatch(actions.auth(email, password, authFunc)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthFunction)