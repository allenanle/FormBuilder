import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import InputList from './InputList'
import InputListContainer from '../containers/InputListContainer'
import AddInput from '../components/AddInput'


export default ({ addInput, switchTab }) => {
  const onSelect = (index) => {
    if (index === 0) {
      switchTab('CREATE')
    } else if (index === 1) {
      switchTab('PREVIEW')
    } else {
      switchTab('EXPORT')
    }
  }

  return (
    <Tabs onSelect={ onSelect }>
      <TabList>
        <Tab index={ 0 }>CREATE</Tab>
        <Tab index={ 1 }>PREVIEW</Tab>
        <Tab index={ 2 }>EXPORT</Tab>
      </TabList>

      <TabPanel>
        <InputListContainer />
        <AddInput addInput={ addInput } />
      </TabPanel>
      <TabPanel>
        <InputListContainer />
      </TabPanel>
      <TabPanel>
        <h1> JSON.stringify(store) </h1>
      </TabPanel>
    </Tabs>
  )
}
