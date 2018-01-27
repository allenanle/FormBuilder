import { connect } from 'react-redux'

import { switchTab } from '../actions/tab'


const mapDispatchToProps = {
  switchTab
}

const TabsContainer = connect(null, mapDispatchToProps)(Tabs)

export default InputListContainer
