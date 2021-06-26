import { GET_USERS } from './action-types'
import { actionObject, fetchService } from '@utils'

export const getUsers: any = () => async (dispatch, getState) => {
  const result = await dispatch(fetchService('https://api.github.com/users', 'GET', {}, null))
  dispatch(actionObject(GET_USERS, result))
}
