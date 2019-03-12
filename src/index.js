import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

import authReducer from './store/reducers/auth'


const rootReducer = combineReducers({
    auth: authReducer
})

const middleware = composeWithDevTools(
    applyMiddleware(thunk, createLogger({collapsed: true}))
)

const store = createStore(rootReducer, middleware)

const app = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
