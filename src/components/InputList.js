import React from 'react'

import Input from './Input'
import InputPreview from './InputPreview'


const InputList = (props) => {
  const inputIds = props.isSubInputList ?
    (props.subs) :
    (Object.keys(props.inputs).filter(id => {
        return props.inputs[id].parentId === null
      }
    ))

  return (
    <div>
      { inputIds.map(id => {
        if (props.tab === 'CREATE') {
          // CREATE TAB
          return (
            <Input
              key={ id }
              tab={ props.tab }
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
              answer={ props.answer }
              inputs={ props.inputs }
              { ...props.inputs[id] }
            />
          )
        }
      }) }
    </div>
  )
}

export default InputList
