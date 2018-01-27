import React from 'react'

import InputList from './InputList'


const InputPreview = (props) => (
  <div>
    <div className='input-form-preview'>
      {/* QUESTION */}
        <label>{ props.questionText }</label>
        { props.questionType === 'yes/no' &&
          <div>
            <input type='radio' value='yes' />
            <label>Yes</label>
            <input type='radio' value='no' />
            <label>No</label>
          </div>
        }
        { (props.questionType === 'text' || props.questionType === 'number') &&
          <div>
            <input />
          </div>
        }
    </div>

    {/* SUB-INPUT LIST */}
    <div>
      { props.subs.length > 0 &&
        <InputList
          isSubInputList={ true }
          { ...this.props }
        />
      }
    </div>
  </div>
)

export default InputPreview
