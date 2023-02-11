// A reducer is a function that receives the state and the action we need to perform on the state.
const reducer = (state, action) => {
  switch (action.type /* get the type from the action object */) {
    case "UPDATE_USER":
      return { ...state, currentUser: action.payload }
    case "UPDATE_ALERT":
      return { ...state, alert: action.payload }
    case "OPEN_LOGIN":
      return { ...state, openLogin: true }
    case "CLOSE_LOGIN":
      return { ...state, openLogin: false }
    case "START_LOADING":
      return { ...state, loading: true }
    case "END_LOADING":
      return { ...state, loading: false }
    default:
      throw new Error("No matched action")
  }
}

export default reducer
