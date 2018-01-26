import React from 'react'
import { connect } from 'react-redux'

import { addInput } from '../actions/inputs'
import Input from '../components/Input'


let InputList = (props) => (
  !props.isSubInputList ?
  // QUESTION LIST
  <div>
    { Object.keys(props.inputs).map(id => {
      if (props.inputs[id].parentId === null) {
        return (
          <Input
            key={ id }
            inputs={ props.inputs }
            addInput={ props.addInput }
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
  addInput
}

InputList = connect(mapStateToProps, mapDispatchToProps)(InputList)

export default InputList
