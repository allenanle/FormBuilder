import React from 'react'

import InputList from '../containers/InputList'


class Input extends React.Component {
  constructor(props) {
    super(props)

    this.onAddSubInput = this.onAddSubInput.bind(this)
  }

  onAddSubInput() {
    this.props.addInput({
      parentId: this.props.id
    })
  }

  onInputChange() {

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
              />
            </label>
            <div>
              <label>
                Type
                <select>
                  <option>YES/NO</option>
                  <option>TEXT</option>
                  <option>NUMBER</option>
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
