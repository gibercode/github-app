import { combineReducers } from 'redux'
import users from './users/reducer'
import loader from './loader/reducer'

const reducers = combineReducers({
  users,
  loader
})

export default reducers
