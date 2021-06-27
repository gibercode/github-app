import { GET_USERS, SEARCH_USERS } from './action-types'
import { actionObject, fetchService, users, usersSearch } from '@utils'
import { LOADER } from '@store/loader/action-types'

export const getUsers: any = () => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, { loader: true } ))
    const result = await fetchService(`${users}?since=0&per_page=20`, 'GET', {}, null)
    dispatch(actionObject(GET_USERS, { users: result } ))
    dispatch(actionObject(LOADER, { loader: false } ))
  } catch(error) {
    return error
  }
}

export const searchUsers = (payload) => async (dispatch, getState) =>  {
  try {
    dispatch(actionObject(LOADER, { loader: true } ))
    const result = await fetchService(`${usersSearch}?q=${payload}&per_page=30`, 'GET', {}, null)
    dispatch(actionObject(GET_USERS, { users: result?.items } ))
    dispatch(actionObject(LOADER, { loader: false } ))
  } catch(error){
    return error
  }
}
