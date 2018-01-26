import {
  ADD_QUESTION,
  UPDATE_FIELD
} from '../actions/questions.js'

const questions = (state = {}, action) => {
  const payload = action.payload
  const newState = { ...state }

  switch (action.type) {
    case ADD_QUESTION:
      if (payload.parentId !== null) {
        newState[payload.parentId].subs.push(payload.id)
      }
      newState[payload.id] = payload
      return newState

    case UPDATE_FIELD:
      newState[payload.id][payload.field] = payload.input
      return newState

    default:
      return state
  }
}

export default questions
