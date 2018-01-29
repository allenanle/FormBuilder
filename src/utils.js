const deleteInput = (id, state) => {
  const subsCopy = [...state[id].subs]

  // delete its children
  if (subsCopy) {
    subsCopy.forEach(subId => {
      deleteInput(subId, state)
    })
  }

  // remove its ID from its parent's subs array
  if (state[id].parentId !== null) {
    const parentSubs = state[state[id].parentId].subs
    for (let i = 0; i < parentSubs.length; i++) {
      if (parentSubs[i] === id) {
        parentSubs.splice(i, 1)
        break
      }
    }
  }

  // delete itself
  delete state[id]
}

const checkAnswer = ({ conditionType, conditionValue, previewValue }) => {
  if (isNan(conditionValue)) {
    conditionValue.trim().toLowerCase()
    previewValue.trim().toLowerCase()
  }

  switch (conditionType) {
    case '=':
      return previewValue === conditionValue ? true : false
    case '>':
      return previewValue > conditionValue ? true : false
    case '<':
      return previewValue < conditionValue ? true : false
  }
}

export default deleteInput
