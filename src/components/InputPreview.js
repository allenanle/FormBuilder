import React from 'react'

import InputList from './InputList'


class InputPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: ''
    }
  }

  render() {
    <div>
      <div className='input-form-preview'>
        {/* QUESTION */}
          <label>{ props.questionText }</label>
          { props.questionType === 'yes/no' &&
            <div>
              <input type='radio' value='yes' />
              <label> Yes</label>
              <input type='radio' value='no' />
              <label> No</label>
            </div>
          }
          { (props.questionType === 'text' || props.questionType === 'number') &&
            <div>
              <input />
            </div>
          }
      </div>

      {/* SUB-INPUT LIST */}
      <div className='sub-input-list'>
        { props.subs.length > 0 &&
          <InputList
            isSubInputList={ true }
            { ...props }
          />
        }
      </div>
    </div>
  }
}

export default InputPreview
