import React from 'react'

import Question from './Question'


const SubInputList = ({ subs }) => (
  <div className='sub-input-list'>
    { subs.map(sub =>
      <Question
        key={ sub.id }
        addQuestion={ addQuestion }
        { ...subs[id] }
      />
    ) }
  </div>
)

export default SubInputList
