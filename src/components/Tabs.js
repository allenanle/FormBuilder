import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import InputList from './InputList'
import InputListContainer from '../containers/InputListContainer'
import AddInput from '../components/AddInput'


export default ({ addInput, switchTab }) => {
  const onClick = (e) => switchTab(e.target.value)

  return (
    <Tabs>
      <TabList>
        <Tab onClick={ onClick } value='CREATE'>CREATE</Tab>
        <Tab onClick={ onClick } value='PREVIEW'>PREVIEW</Tab>
        <Tab onClick={ onClick } value='EXPORT'>EXPORT</Tab>
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
