let initialState = {
  isLogged: false
};
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGGED":
      return { ...state, isLogged: true };
    case "UNSET_LOGGED":
      return { ...state, isLogged: false };
    default:
      return state;
  }
}
