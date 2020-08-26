import commentsReducer from 'reducers/comments';

import { combineReducers } from 'redux';

export default combineReducers({
  comments: commentsReducer
})