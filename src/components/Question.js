import React from 'react'

import QuestionList from '../containers/QuestionList'


const Question = (props) => {
  const addSubInput = () => props.addQuestion({
    parentId: props.id
  })

  return (
    <div>
      <div className='question'>
        {/* CONDITION */}
        {props.parentId !== null &&
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
          <button onClick={ addSubInput }>
            ADD SUB-INPUT
          </button>
          <button>DELETE</button>
        </div>
      </div>

      {/* SUB-INPUT LIST */}
      <div>
        {props.subs.length > 0 &&
          <QuestionList
            isSubInputList={ true }
            { ...props }
          />
        }
      </div>
    </div>
  )
}

export default Question
