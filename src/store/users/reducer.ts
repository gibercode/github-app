import { AnyAction } from 'redux'
import { GET_USERS } from './action-types'

const initialState = {
  users: [],
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_USERS:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default resourceReducer
