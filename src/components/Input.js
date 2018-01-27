import React from 'react'

import InputList from './InputList'


class Input extends React.Component {
  constructor(props) {
    super(props)

    this.onAddSubInput = this.onAddSubInput.bind(this)
    this.onDeleteInput = this.onDeleteInput.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onAddSubInput() {
    this.props.addInput({ parentId: this.props.id })
  }

  onDeleteInput() {
    this.props.deleteInput(this.props.id)
  }

  onInputChange(field, value) {
    this.props.updateField(this.props.id, field, value)
  }

  render() {
    return (
      <div>
        <div className='input-form'>
          {/* CONDITION */}
          { this.props.parentId !== null &&
            <div>
              <label>
                Condition
                <select
                  defaultValue={ this.props.conditionType }
                  onChange={ (e) => this.onInputChange(
                    'conditionType',
                    e.target.value
                  ) }
                >
                  <option hidden>SELECT</option>
                  <option value='='>EQUALS</option>
                  <option value='>'>GREATER THAN</option>
                  <option value='<'>LESS THAN</option>
                </select>
              </label>
              <label>
                <input
                  className='condition-text'
                  defaultValue={ this.props.conditionText }
                  onBlur={ (e) => this.onInputChange(
                    'conditionText',
                    e.target.value.trim()
                  ) }
                />
              </label>
            </div>
          }

          {/* QUESTION */}
          <div>
            <label>
              Question
              <input
                className='question-text'
                defaultValue={ this.props.questionText }
                onBlur={ (e) => this.onInputChange(
                  'questionText',
                  e.target.value.trim()
                ) }
              />
            </label>
            <div>
              <label>
                Type
                <select
                  className='question-type'
                  defaultValue={ this.props.questionType }
                  onChange={ (e) => this.onInputChange(
                    'questionType',
                    e.target.value
                  ) }
                >
                  <option hidden>SELECT</option>
                  <option value='yes/no'>YES/NO</option>
                  <option value='text'>TEXT</option>
                  <option value='number'>NUMBER</option>
                </select>
              </label>
            </div>
          </div>

          {/* BUTTONS */}
          <div className='input-form-buttons'>
            <button onClick={ this.onAddSubInput }>
              ADD SUB-INPUT
            </button>
            <button onClick={ this.onDeleteInput }>DELETE</button>
          </div>
        </div>

        {/* SUB-INPUT LIST */}
        <div className='sub-input-list'>
          { this.props.subs.length > 0 &&
            <InputList
              isSubInputList={ true }
              { ...this.props }
            />
          }
        </div>
      </div>
    )
  }
}

export default Input
