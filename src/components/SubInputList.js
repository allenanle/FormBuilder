import React from 'react'

import Question from './Question'


const SubInputList = (props) => (
  <div className='sub-input-list'>
    { props.subs.map(sub =>
      <Question
        key={ sub.id }
        addQuestion={ props.addQuestion }
        { ...subs[id] }
      />
    ) }
  </div>
)

export default SubInputList
