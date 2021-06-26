import { LOADER } from './action-types'
import { actionObject } from '@utils'

export const setLoader = (payload) => (dispatch) =>{
  dispatch(actionObject(LOADER, { loader: payload }))
}

