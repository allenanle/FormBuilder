import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import InputList from './InputList'
import InputListContainer from '../containers/InputListContainer'
import AddInput from '../components/AddInput'


export default ({ inputs, addInput, switchTab }) => {
  const onSelect = (index) => {
    switch (index) {
      case 0:
        return switchTab('CREATE')
      case 1:
        return switchTab('PREVIEW')
      case 2:
        return switchTab('EXPORT')
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
        <table> {JSON.stringify(inputs)} </table>
      </TabPanel>
    </Tabs>
  )
}
