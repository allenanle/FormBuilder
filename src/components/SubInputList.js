import React from 'react'

import Question from './Question'


const SubInputList = (props) => (
  <div className='sub-input-list'>
    { props.subs.map(id => {
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

export default SubInputList
