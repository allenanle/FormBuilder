import { combineReducers } from 'redux'

import inputs from './inputs'
import tab from './tab'


const rootReducer = combineReducers({
  tab,
  inputs
})

export default rootReducer
