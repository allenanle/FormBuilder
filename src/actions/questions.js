export const ADD_QUESTION = 'ADD_QUESTION'

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

export const updateField = ({ field, input }) => ({
  type: 'UPDATE_FIELD',
  payload: {
    field,
    input
  }
})
