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
    const {
      parentId,
      subs,
      questionText,
      questionType,
      conditionType,
      conditionValue,
      inputs
    } = this.props

    const ifYesNo = parentId !== null ? inputs[parentId].questionType === 'yes/no' : null

    return (
      <div>
        <div className='input-form'>
        {/* CONDITION ROW */}
          { parentId !== null &&
            <div>
              <label>
                Condition
                <select
                  className='condition-type'
                  defaultValue={ conditionType }
                  onChange={ (e) => this.onInputChange(
                    'conditionType',
                    e.target.value
                  ) }
                >
                  <option hidden>SELECT</option>
                  <option value='='>EQUALS</option>
                  { !ifYesNo &&
                    <option value='>'>GREATER THAN</option>
                  }
                  { !ifYesNo &&
                    <option value='<'>LESS THAN</option>
                  }
                </select>
              </label>
              <label>
                { !ifYesNo &&
                  <input
                    type={ inputs[parentId].questionType }
                    placeholder={ inputs[parentId].questionType }
                    className='condition-value'
                    defaultValue={ conditionValue }
                    onBlur={ (e) => this.onInputChange(
                      'conditionValue',
                      e.target.value.trim()
                    ) }
                  />
                }
                { ifYesNo &&
                  <select
                    className='condition-value'
                    defaultValue={ conditionType }
                    onChange={ (e) => this.onInputChange(
                      'conditionValue',
                      e.target.value
                    ) }
                  >
                    <option hidden>SELECT</option>
                    <option value='yes'>YES</option>
                    <option value='no'>NO</option>
                  </select>
                }
              </label>
            </div>
          }

        {/* QUESTION ROW */}
          <div>
            <label>
              Question
              <input
                className='question-text'
                defaultValue={ questionText }
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
                  defaultValue={ questionType }
                  onChange={ (e) => this.onInputChange(
                    'questionType',
                    e.target.value
                  ) }
                >
                  <option hidden>SELECT</option>
                  <option value='yes/no'>YES / NO</option>
                  <option value='text'>TEXT</option>
                  <option value='number'>NUMBER</option>
                </select>
              </label>
            </div>
          </div>

        {/* BUTTONS ROW */}
          <div className='input-form-buttons'>
            <button onClick={ this.onAddSubInput }>
              ADD SUB-INPUT
            </button>
            <button onClick={ this.onDeleteInput }>DELETE</button>
          </div>
        </div>

      {/* SUB-INPUT LIST */}
        <div className='sub-input-list'>
          { subs.length > 0 &&
            <InputList
              isSubList={ true }
              { ...this.props }
            />
          }
        </div>
      </div>
    )
  }
}

export default Input
