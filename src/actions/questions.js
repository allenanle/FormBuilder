export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_FIELD = 'UPDATE_FIELD'

let questionId = 0

export const addQuestion = ({ parentId }) => ({
  type: 'ADD_QUESTION',
  payload: {
    id: questionId++,
    parentId,
    subs: [],
    questionText: '',
    questionType: '',
    conditionType: '',
    conditionText: ''
  }
})

export const updateField = ({ id, field, input }) => ({
  type: 'UPDATE_FIELD',
  payload: {
    id,
    field,
    input
  }
})
