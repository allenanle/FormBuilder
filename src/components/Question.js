import React from 'react'


const Question = (props) => {
  const addSubInput = () => props.addQuestion({
    parentId: props.id
  })

  return (
    <div className='question'>
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
  )
}

export default Question
