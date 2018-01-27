const deleteInputs = (id, state) => {
  // delete its children
  if (state[id].subs.length) {
    state[id].subs.forEach(subId => {
      deleteInputs(subId, state)
    })
  }

  // remove its ID from its parent's subs array
  if (state[id].parentId !== null) {
    const parentSubs = state[state[id].parentId].subs
    console.log(parentSubs)
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

export default deleteInputs
