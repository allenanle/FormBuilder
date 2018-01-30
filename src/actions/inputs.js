import { v4 } from 'node-uuid'


export const ADD_INPUT = 'ADD_INPUT'
export const DELETE_INPUT = 'DELETE_INPUT'
export const UPDATE_FIELD = 'UPDATE_FIELD'

export const addInput = ({ parentId }) => ({
  type: ADD_INPUT,
  payload: {
    id: v4(),
    parentId,
    subs: [],
    questionText: '',
    questionType: '',
    conditionType: '',
    conditionValue: ''
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
