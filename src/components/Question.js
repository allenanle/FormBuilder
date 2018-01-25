import React from 'react'

import SubInputList from './SubInputList'


const Question = (props) => {
  console.log(props)

  const addSubInput = () => props.addQuestion({
    parentId: props.id
  })

  return (
    <div className='question'>
      <div>
        <label>
          {props.id}. Question
          <input
            type="text"
          />
        </label>

        <label>
          Type
          <select>
            <option>YES/NO</option>
            <option>TEXT</option>
            <option>NUMBER</option>
          </select>
        </label>

        {/* ADD SUB-INPUT */}
        <button onClick={ addSubInput }>
          ADD SUB-INPUT
        </button>

        {/* DELETE */}
        <button>DELETE</button>
      </div>

      {props.subs.length > 0 &&
        <SubInputList
          { ...props }
        />
      }
    </div>
  )
}

export default Question
