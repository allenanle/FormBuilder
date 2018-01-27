import { connect } from 'react-redux'

import {
  addInput,
  deleteInput,
  updateField
} from '../actions/inputs'
import InputList from '../components/InputList'


const mapStateToProps = (state, ownProps) => (
  ownProps.isSubInputList ?
  {
    ...ownProps
  } : {
    inputs: state.inputs,
    isSubInputList: false
  }
)

const mapDispatchToProps = {
  addInput,
  deleteInput,
  updateField
}

const InputListContainer = connect(mapStateToProps, mapDispatchToProps)(InputList)

export default InputListContainer
