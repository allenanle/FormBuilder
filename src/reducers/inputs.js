import {
  ADD_INPUT,
  DELETE_INPUT,
  UPDATE_FIELD
} from '../actions/inputs'

import deleteInputs from '../utils'


const inputs = (state = {}, action) => {
  const payload = action.payload
  const newState = { ...state }

  switch (action.type) {
    case ADD_INPUT:
      if (payload.parentId !== null) {
        newState[payload.parentId].subs.push(payload.id)
      }
      newState[payload.id] = payload
      return newState

    case DELETE_INPUT:
      deleteInputs(payload.id, newState)
      return newState

    case UPDATE_FIELD:
      newState[payload.id][payload.field] = payload.value
      return newState

    default:
      return state
  }
}

export default inputs
