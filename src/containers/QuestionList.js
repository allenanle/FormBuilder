import React from 'react'

import Question from './Question.jsx'

let Questions = ({ questions }) => (

)

const mapStateToProps = (state) => ({
  questions: state.questions
})

Questions = connect(mapStateToProps)(Questions)

export default Questions
