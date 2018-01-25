import React from 'react'
import { connect } from 'react-redux'

import { addQuestion } from '../actions/questions'


let App = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      HELLO WORLD!
    </h1>
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
