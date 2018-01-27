import React from 'react'

import Input from './Input'
import InputPreview from './InputPreview'


const InputList = (props) => (
  !props.isSubInputList ?
  // MAIN INPUT LIST
  <div>
    { Object.keys(props.inputs).map(id => {
      if (props.inputs[id].parentId === null) {
        if (props.tab === 'CREATE') {
          // CREATE TAB
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
        } else {
          // PREVIEW TAB
          return (
            <InputPreview
              key={ id }
              { ...props.inputs[id] }
            />
          )
        }
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

export default InputList
