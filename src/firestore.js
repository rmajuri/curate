import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

import {config} from './secrets'

export const fbase = firebase.initializeApp(config)
export const firestore = firebase.firestore()
export const fireAuth = firebase.auth()