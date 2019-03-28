import React, { Component } from 'react'
import Input from '../UI/Input/Input'
import { Button } from 'semantic-ui-react'
import styles from './AuthFunction.module.css'
import * as firebase from 'firebase'
import { withRouter } from 'react-router-dom'

class AuthFunction extends Component {
  state = this.props.state

  checkValidity(value, rules) {
    let isValid = true
    if (!rules) {
      return true
    }

    if (rules.required) {
      isValid = (value.trim() !== '') & isValid
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
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    }
    this.setState({ controls: updatedControls })
  }

  submitHandler = event => {
    event.preventDefault()

    if (this.props.function === 'signup') {
      const userInDB = firebase
        .firestore()
        .collection('users')
        .doc(`${this.state.controls.email.value}`)

      userInDB.get().then(user => {
        if (!user.exists) {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() =>
              firebase
                .auth()
                .createUserWithEmailAndPassword(
                  this.state.controls.email.value,
                  this.state.controls.password.value
                )
                .then(() => this.props.history.push('/'))
                .catch(error => console.error(error))
            )

          firebase
            .firestore()
            .collection('users')
            .doc(`${this.state.controls.email.value}`)
            .set({
              email: this.state.controls.email.value,
              role: '',
              username: '',
              name: '',
              bio: '',
              location: '',
              createdCurations: [],
              favoritedCurations: [],
              followedCurators: [],
              followedTopics: [],
              photoURL: '',
            })
        } else {
          this.setState({ emailInUse: true })
        }
      })
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.state.controls.email.value,
          this.state.controls.password.value
        )
        .then(() => {
          this.props.history.push('/')
        })
        .catch(error => {
          console.error(error)
          this.setState({ error: error })
        })
    }
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
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

    const buttonText = this.props.function === 'signup' ? 'Sign Up' : 'Log In'
    const headingText =
      this.props.function === 'signup'
        ? 'Please join us.'
        : 'Welcome back, friend.'

    return (
      <div className={styles.tabContentMargin}>
        {this.state.error.message ? (
          this.state.error.message
        ) : (
          <div>
            <h3 className={this.props.styles.heading}>{headingText}</h3>
            <form onSubmit={this.submitHandler} className={this.props.form}>
              {form}
              <Button className={this.props.styles.button}>{buttonText}</Button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(AuthFunction)
