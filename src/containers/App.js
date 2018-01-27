import React from 'react'
import { connect } from 'react-redux'

import { addInput } from '../actions/inputs'
import InputList from './InputList'
import AddInput from '../components/AddInput'


let App = ({ inputs, addInput }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      FORM BUILDER
    </h1>

    <InputList />
    <AddInput addInput={ addInput } />
  </div>
)

const mapDispatchToProps = {
  addInput
}

App = connect(null, mapDispatchToProps)(App)

export default App
