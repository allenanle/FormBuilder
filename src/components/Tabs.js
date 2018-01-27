import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import InputList from './InputList'
import InputListContainer from '../containers/InputListContainer'
import AddInput from '../components/AddInput'


export default ({ addInput, switchTab }) => {
  const onClick = (current) => {
    if (current === 0) {
      switchTab('CREATE')
    } else if (current === 1) {
      switchTab('PREVIEW')
    } else {
      switchTab('EXPORT')
    }
  }

  return (
    <Tabs onSelect={ onClick }>
      <TabList>
        <Tab eventKey={ 0 } value='CREATE'>CREATE</Tab>
        <Tab eventKey={ 1 } value='PREVIEW'>PREVIEW</Tab>
        <Tab eventKey={ 2 } value='EXPORT'>EXPORT</Tab>
      </TabList>

      <TabPanel>
        <InputListContainer />
        <AddInput addInput={ addInput } />
      </TabPanel>
      <TabPanel>
        <InputListContainer />
      </TabPanel>
      <TabPanel>
        <InputListContainer />
      </TabPanel>
    </Tabs>
  )
}
