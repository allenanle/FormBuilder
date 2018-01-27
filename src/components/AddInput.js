import React from 'react'


const AddInput = ({ addInput }) => (
  <div className='add-input-button'>
    <button onClick={ () => addInput({ parentId: null }) }>
      ADD INPUT
    </button>
  </div>
)

export default AddInput
