import { connect } from 'react-redux'

import Tabs from '../components/Tabs'
import { addInput } from '../actions/inputs'
import { switchTab } from '../actions/tab'


const mapDispatchToProps = {
  addInput,
  switchTab
}

const TabsContainer = connect(null, mapDispatchToProps)(Tabs)

export default TabsContainer
