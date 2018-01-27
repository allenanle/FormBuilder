import React from 'react'
import { connect } from 'react-redux'

import {
  addInput,
  deleteInput,
  updateField
} from '../actions/inputs'
import Input from '../components/Input'


let InputList = (props) => (
  !props.isSubInputList ?
  // MAIN INPUT LIST
  <div>
    { Object.keys(props.inputs).map(id => {
      if (props.inputs[id].parentId === null) {
        return (
          <Input
            key={ id }
            inputs={ props.inputs }
            addInput={ props.addInput }
            deleteInput={ props.deleteInput }
            updateField={ props.updateField }
            { ...props.inputs[id] }
          />
        )
      }
    }) }
  </div> :
  // SUB-INPUT LIST
  <div className='sub-input-list'>
    { props.subs.map(id => {
      return (
        <Input
          key={ id }
          inputs={ props.inputs }
          addInput={ props.addInput }
          deleteInput={ props.deleteInput }
          updateField={ props.updateField }
          { ...props.inputs[id] }
        />
      )
    }) }
  </div>
)

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

InputList = connect(mapStateToProps, mapDispatchToProps)(InputList)

export default InputList
