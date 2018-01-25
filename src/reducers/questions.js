import {
  ADD_QUESTION
} from '../actions/questions.js'

const questions = (state = {}, action) => {
  const payload = action.payload

  switch (action.type) {
    case ADD_QUESTION:
      const newState = { ...state }
      if (payload.parentId !== null) {
        newState[payload.parentId].subs.push(payload.id)
      }
      newState[payload.id] = payload
      return newState

    default:
      return state
  }
}

export default questions
