import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth'

import { combineReducers } from 'redux';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
})