import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidater from 'middlewares/stateValidator'
import reduxPromise from 'redux-promise';

export default ({ children, initialState={} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidater)
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}