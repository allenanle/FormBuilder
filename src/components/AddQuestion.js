import React from 'react'


const AddQuestion = ({ addQuestion }) => (
  <div>
    <button onClick={ () => addQuestion({ parentId: null }) }>
      ADD QUESTION
    </button>
  </div>
)

export default AddQuestion
