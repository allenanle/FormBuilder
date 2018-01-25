import React from 'react'
import { connect } from 'react-redux'

import Question from '../components/Question'


let QuestionList = ({ questions }) => (
  <div>
    {Object.keys(questions).map(id =>
      <Question
        key={ id }
        { ...questions[id] }
      />
    )}
  </div>
)

const mapStateToProps = (state) => ({
  questions: state.questions
})

QuestionList = connect(mapStateToProps)(QuestionList)

export default QuestionList
