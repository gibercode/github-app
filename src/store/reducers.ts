import { combineReducers } from 'redux'
import users from './users/reducer'
import loader from './loader/reducer'
import repositories from './repositories/reducer'

const reducers = combineReducers({
  users,
  loader,
  repositories
})

export default reducers
