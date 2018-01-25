import React from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questions'
import Question from '../components/Question'


let QuestionList = ({ questions, addQuestion }) => (
  <div>
    { Object.keys(questions).map(id => {
      if (questions[id].parentId === null) {
        return (
          <Question
            key={ id }
            questions={ questions }
            addQuestion={ addQuestion }
            { ...questions[id] }
          />
        )
      }
    }) }
  </div>
)

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = {
  addQuestion
}

QuestionList = connect(mapStateToProps, mapDispatchToProps)(QuestionList)

export default QuestionList
