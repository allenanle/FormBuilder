import {
  CREATE,
  PREVIEW,
  EXPORT
} from '../actions/tab'


const tab = (state = CREATE, action) => {
  switch (action.tab) {
    case CREATE:
      return CREATE

    case PREVIEW:
      return PREVIEW

    case EXPORT:
      return EXPORT

    default:
      return state
  }
}

export default tab
