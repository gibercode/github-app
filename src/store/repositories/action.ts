import { GET_REPOSITORIES, SEARCH_REPOSITORIES } from './action-types'
import { actionObject, fetchService, repositories, repositoriesSearch } from '@utils'
import { LOADER } from '@store/loader/action-types'

export const getRepositories: any = () => async (dispatch, getState) => {
  try {
    dispatch(actionObject(LOADER, { loader: true } ))
    const result = await fetchService(`${repositories}?per_page=30`, 'GET', {})
    dispatch(actionObject(GET_REPOSITORIES, { repositories: result } ))
    dispatch(actionObject(LOADER, { loader: false } ))
  } catch(error) {
    dispatch(actionObject(LOADER, { loader: false } ))
    return error
  }
}

export const searchRepositories = (payload) => async (dispatch, getState) =>  {
  try {
    dispatch(actionObject(LOADER, { loader: true } ))
    const result = await fetchService(`${repositoriesSearch}?q=${payload}&per_page=30`, 'GET', {})
    dispatch(actionObject(GET_REPOSITORIES, { repositories: result?.items } ))
    dispatch(actionObject(LOADER, { loader: false } ))
  } catch(error){
    dispatch(actionObject(LOADER, { loader: false } ))
    return error
  }
}
