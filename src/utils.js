export const deleteInput = (id, state) => {
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

export const checkAnswer = ({ conditionType, conditionValue, answer }) => {
  // Default answer for parent level questions
  if (answer === '*') return true

  if (answer !== null) {
    conditionValue = conditionValue.trim().toLowerCase()
    answer = answer.trim().toLowerCase()
  }

  // If answer is a number
  if (!isNaN(Number(answer))) {
    conditionValue = Number(conditionValue)
    answer = Number(answer)
  }

  switch (conditionType) {
    case '=':
      return answer === conditionValue
    case '>':
      return answer > conditionValue
    case '<':
      return answer < conditionValue
  }
}
