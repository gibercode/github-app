import { AnyAction } from 'redux'
import { LOADER } from './action-types'

const initialState = {
  loader: false,
}

const resourceReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case LOADER:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default resourceReducer
