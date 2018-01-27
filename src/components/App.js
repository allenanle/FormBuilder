import React from 'react'
import { connect } from 'react-redux'

import TabsContainer from '../containers/TabsContainer'


const App = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>
      FORM BUILDER
    </h1>

    <TabsContainer />
  </div>
)

export default App
