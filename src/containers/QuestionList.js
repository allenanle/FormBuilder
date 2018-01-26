import React from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questions'
import Question from '../components/Question'


let QuestionList = (props) => (
  !props.isSubInputList ?
  // QUESTION LIST
  <div>
    { Object.keys(props.questions).map(id => {
      if (props.questions[id].parentId === null) {
        return (
          <Question
            key={ id }
            questions={ props.questions }
            addQuestion={ props.addQuestion }
            { ...props.questions[id] }
          />
        )
      }
    }) }
  </div> :
  // SUB-INPUT LIST
  <div className='sub-input-list'>
    { props.subs.map(id => {
      return (
        <Question
          key={ id }
          questions={ props.questions }
          addQuestion={ props.addQuestion }
          { ...props.questions[id] }
        />
      )
    }) }
  </div>
)

const mapStateToProps = (state, ownProps) => (
  ownProps.isSubInputList ?
  {
    ...ownProps
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
