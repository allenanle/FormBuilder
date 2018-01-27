import React from 'react'
import { connect } from 'react-redux'

import { addInput } from '../actions/inputs'
import InputListContainer from './InputListContainer'
import AddInput from '../components/AddInput'


let App = ({ addInput }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      FORM BUILDER
    </h1>

    <InputListContainer />
    <AddInput addInput={ addInput } />
  </div>
)

const mapDispatchToProps = {
  addInput
}

App = connect(null, mapDispatchToProps)(App)

export default App
