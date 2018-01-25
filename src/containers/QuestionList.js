import React from 'react'

import Question from './Question.jsx'

let Questions = ({ questions }) => (
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

Questions = connect(mapStateToProps)(Questions)

export default Questions
