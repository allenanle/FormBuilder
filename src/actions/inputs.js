export const ADD_INPUT = 'ADD_INPUT'
export const DELETE_INPUT = 'DELETE_INPUT'
export const UPDATE_FIELD = 'UPDATE_FIELD'

let inputId = 0

export const addInput = ({ parentId }) => ({
  type: ADD_INPUT,
  payload: {
    id: inputId++,
    parentId,
    subs: [],
    questionText: '',
    questionType: '',
    conditionType: '',
    conditionText: ''
  }
})

export const deleteInput = (id) => ({
  type: DELETE_INPUT,
  payload: {
    id
  }
})

export const updateField = (id, field, value) => ({
  type: UPDATE_FIELD,
  payload: {
    id,
    field,
    value
  }
})
