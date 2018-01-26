import {
  ADD_INPUT,
  UPDATE_FIELD
} from '../actions/inputs.js'

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

    case UPDATE_FIELD:
      newState[payload.id][payload.field] = payload.value
      return newState

    default:
      return state
  }
}

export default inputs
