import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import InputList from './InputList'


export default ({ switchTab }) => {
  const onClick = (e) => switchTab(e.target.value)

  return (
    <Tabs>
      <TabList>
        <Tab onClick={ onClick } value='CREATE'>CREATE</Tab>
        <Tab onClick={ onClick } value='PREVIEW'>PREVIEW</Tab>
        <Tab onClick={ onClick } value='EXPORT'>EXPORT</Tab>
      </TabList>

      <TabPanel>
        CREATE
      </TabPanel>
      <TabPanel>
        PREVIEW
      </TabPanel>
      <TabPanel>
        EXPORT
      </TabPanel>
    </Tabs>
  )
}
