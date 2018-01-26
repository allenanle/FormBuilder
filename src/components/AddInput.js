import React from 'react'


const AddInput = ({ addInput }) => (
  <div>
    <button onClick={ () => addInput({ parentId: null }) }>
      ADD INPUT
    </button>
  </div>
)

export default AddInput
