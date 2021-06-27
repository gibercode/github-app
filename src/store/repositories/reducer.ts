import { AnyAction } from 'redux'
import { GET_REPOSITORIES } from './action-types'

const initialState = {
  repositories: [],
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_REPOSITORIES:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default resourceReducer
