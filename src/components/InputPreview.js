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
    const meetCondition = checkAnswer({
      conditionType: this.props.conditionType,
      conditionValue: this.props.conditionValue,
      answer: this.props.answer
    })

    return (
      <div>
        { meetCondition &&
          <div>
            <div className='input-form-preview'>
              {/* QUESTION */}
              <label>{ this.props.questionText }</label>
              { this.props.questionType === 'yes/no' &&
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
              { (this.props.questionType === 'text' || this.props.questionType === 'number') &&
                <div>
                  <input />
                </div>
              }
            </div>

            <div className='sub-input-list'>
              {/* SUB-INPUT LIST */}
              { (this.props.subs.length > 0) &&
                <InputList
                  inputs={ this.props.inputs }
                  subs={ this.props.subs }
                  answer={ this.state.answer }
                  isSubInputList={ true }
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
