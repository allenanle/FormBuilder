import React from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questions'
import Question from '../components/Question'


let QuestionList = ({ questions, addQuestion, isSubInputList }) => (
  <div>
    { !isSubInputList &&
      Object.keys(questions).map(id => {
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

    { isSubInputList &&
      props.subs.map(id => {
        return (
          <Question
            key={ id }
            addQuestion={ props.addQuestion }
            questions={ props.questions }
            { ...props.questions[id] }
          />
        )
      }) }
  </div>
)

const mapStateToProps = (state, ownProps) => (
  ownProps.isSubInputList ?
  {
    ...ownProps,
    questions: state.questions
  } : {
    questions: state.questions,
    isSubInputList: false
  }
)

const mapDispatchToProps = {
  addQuestion
}

QuestionList = connect(mapStateToProps, mapDispatchToProps)(QuestionList)

export default QuestionList
