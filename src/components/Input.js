import React from 'react'

import InputList from '../containers/InputList'


class Input extends React.Component {
  constructor(props) {
    super(props)

    this.onAddSubInput = this.onAddSubInput.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onAddSubInput() {
    this.props.addInput({ parentId: this.props.id })
  }

  onInputChange(field, value) {
    this.props.updateField(this.props.id, field, value)
  }

  render() {
    return (
      <div>
        <div className='question-form'>
          {/* CONDITION */}
          { this.props.parentId !== null &&
            <div>
              <label>
                Condition
                <select>
                  <option>EQUALS</option>
                  <option>GREATER THAN</option>
                  <option>LESS THAN</option>
                </select>
              </label>
              <label>
                <input
                  type="text"
                />
              </label>
            </div>
          }

          {/* QUESTION */}
          <div>
            <label>
              Question
              <input
                type="text"
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
                  onChange={ (e) => this.onInputChange(
                    'questionType',
                    e.target.value
                  ) }
                >
                  <option hidden></option>
                  <option value='yes/no'>YES/NO</option>
                  <option value='text'>TEXT</option>
                  <option value='number'>NUMBER</option>
                </select>
              </label>
            </div>
          </div>

          {/* BUTTONS */}
          <div>
            <button onClick={ this.onAddSubInput }>
              ADD SUB-INPUT
            </button>
            <button>DELETE</button>
          </div>
        </div>

        {/* SUB-INPUT LIST */}
        <div>
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
