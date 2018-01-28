import { connect } from 'react-redux'

import Tabs from '../components/Tabs'
import { addInput } from '../actions/inputs'
import { switchTab } from '../actions/tab'


const mapStateToProps = (state) => ({
  inputs: state.inputs
})

const mapDispatchToProps = {
  addInput,
  switchTab
}

const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs)

export default TabsContainer
