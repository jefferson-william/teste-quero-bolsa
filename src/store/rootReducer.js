import { combineReducers } from 'redux'
import Scholarships from './reducers/Scholarships'
import FavoriteScholarships from './reducers/FavoriteScholarships'

export default combineReducers({
  FavoriteScholarships,
  Scholarships,
})
