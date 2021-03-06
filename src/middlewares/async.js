export default ({ dispatch }) => next => action => {
  // Check to see action has a promise on payload property

  // If it does, wait for it to resolve

  // If it doesn't, send the action on to next middleware

  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  action.payload.then((response) => {
    const newAction = { ...action, payload: response}
    dispatch(newAction)
  })

}

