import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'


const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
)

store.subscribe(() => {
  saveState({
    inputs: store.getState().inputs
  })
})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
