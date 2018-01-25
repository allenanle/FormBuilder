import React from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questions'
import QuestionList from './QuestionList'
import AddQuestion from '../components/AddQuestion'


let App = ({ questions, addQuestion }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      FORM BUILDER
    </h1>

    <AddQuestion addQuestion={ addQuestion } />
    <QuestionList />
  </div>
)

const mapStateToProps = (state) => ({
  questions: state.questions
})

const mapDispatchToProps = {
  addQuestion
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
