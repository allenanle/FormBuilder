import React from 'react'
import { connect } from 'react-redux'

import { addInput } from '../actions/inputs'
import InputListContainer from './InputListContainer'
import TabsContainer from './TabsContainer'
import AddInput from '../components/AddInput'


let App = ({ addInput }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      FORM BUILDER
    </h1>

    <TabsContainer />
    <InputListContainer />
    <AddInput addInput={ addInput } />
  </div>
)

const mapDispatchToProps = {
  addInput
}

App = connect(null, mapDispatchToProps)(App)

export default App
