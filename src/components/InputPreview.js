import React from 'react'

import InputList from './InputList'
import { checkAnswer } from '../utils'


class InputPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: null
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ answer: e.target.value })
  }

  render() {
    const {
      subs,
      questionText,
      questionType,
      conditionType,
      conditionValue,
      inputs,
      answer
    } = this.props

    const meetCondition = checkAnswer({
      conditionType: conditionType,
      conditionValue: conditionValue,
      answer: answer
    })

    return (
      <div>
        { meetCondition &&
          <div>
            <div className='input-form-preview'>
              {/* QUESTION */}
              <label>{ questionText }</label>
              { questionType === 'yes/no' &&
                <div>
                  <input
                    type='radio'
                    onClick={ this.onChange }
                    checked={ this.state.answer === 'yes' }
                    value='yes' />
                  <label> Yes</label>
                  <input
                    type='radio'
                    onClick={ this.onChange }
                    checked={ this.state.answer === 'no' }
                    value='no'
                  />
                  <label> No</label>
                </div>
              }
              { (questionType === 'text' || questionType === 'number') &&
                <div>
                  <input
                    onChange={ this.onChange }
                  />
                </div>
              }
            </div>

            <div className='sub-input-list'>
              {/* SUB-INPUT LIST */}
              { (subs.length > 0) &&
                <InputList
                  isSubList={ true }
                  inputs={ inputs }
                  subs={ subs }
                  answer={ this.state.answer }
                />
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default InputPreview
