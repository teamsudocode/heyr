let initialState = {
  isLogged: false,
  userId: "",
  active: "discover",
  newMessage: false
};
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOGGED":
      return { ...state, isLogged: true, userId: action.userId };
    case "UNSET_LOGGED":
      return { ...state, isLogged: false, userId: "" };
    case "SET_ACTIVE":
      return { ...state, active: action.active };
    case "SET_NEW_MESSAGE":
      return { ...state, newMessage: action.newMessage };
    default:
      return state;
  }
}
