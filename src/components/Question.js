import React from 'react'

const Question = (props) => {
  return (
    <div className='question'>
      <label>
        Question
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
      <button>ADD SUB-INPUT</button>

      {/* DELETE */}
      <button>DELETE</button>
    </div>
  )
}

export default Question
