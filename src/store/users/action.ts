import { GET_USERS } from './action-types'
import { actionObject, fetchService, users} from '@utils'

export const getUsers: any = () => async (dispatch, getState) => {
  const result = await fetchService(users, 'GET', {}, null)
  dispatch(actionObject(GET_USERS, result))
}
