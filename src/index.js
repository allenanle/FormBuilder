import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle'

import App from './components/App'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'


const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
)

store.subscribe(throttle(() => {
  saveState({
    inputs: store.getState().inputs
  })
}, 1000))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
