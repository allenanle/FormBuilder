import { connect } from 'react-redux'

import InputList from '../components/InputList'
import {
  addInput,
  deleteInput,
  updateField
} from '../actions/inputs'


const mapStateToProps = (state) => ({
  tab: state.tab,
  inputs: state.inputs,
  // Default answer for parent level questions
  answer: '*'
})

const mapDispatchToProps = {
  addInput,
  deleteInput,
  updateField
}

const InputListContainer = connect(mapStateToProps, mapDispatchToProps)(InputList)

export default InputListContainer
