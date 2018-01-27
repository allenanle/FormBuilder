const deleteInputs = (id, state) => {
  if (state[id].subs.length) {
    state[id].subs.forEach(subId => {
      deleteInputs(subId, state)
    })
  }

  const parentSubs = state[state[id].parentId].subs
  for (let i = 0; i < parentSubs.length; i++) {
    if (parentSubs[i] === id) {
      parentSubs.splice(i, 1)
      break
    }
  }

  delete state[id]
}

export default deleteInputs
